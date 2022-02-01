import { createEffect, createEvent, createStore } from 'effector';
import { createTask, getTasks, updateTask } from 'services/tasks';
import { Task } from 'types/entities';


/**
 * Tasks store
 */
export const $tasks = createStore<Task[]>([]);

/**
 * Task effects
 */
export const getTasksFx = createEffect(getTasks);
export const createTaskFx = createEffect(createTask);
export const updateTaskFx = createEffect(updateTask);

/**
 * Event to be called when tasks list state should be updated
 */
export const listUpdated = createEvent<Task[]>();

/**
 * Sets tasks llist
 */
$tasks.on(getTasksFx.done, (_, { result }) => result.tasks);

/**
 * Add newly added task to tasks list
 */
$tasks.on(createTaskFx.done, (state, { result }) => [result.task, ...state]);

/**
 * Updates task in tasks list
 */
$tasks.on(updateTaskFx.done, (state, { result }) => {
  // Find index of the task
  const index = state.findIndex(item => result && result.task && item._id === result.task._id);
  const newState = [ ...state ];

  // Replace task at found index with new data
  newState[index] = result.task as Task;

  return newState;
});

/**
 * Updates tasks list state
 */
$tasks.on(listUpdated, (_, result) => [ ...result ]);