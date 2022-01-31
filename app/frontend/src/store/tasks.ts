import { createEffect, createStore } from 'effector';
import { createTask, getTasks, updateTask } from 'services/tasks';
import { Task } from 'types/entities';


/**
 * Tasks store
 */
export const $tasks = createStore<Task[]>([]);

/**
 * Task effects
 */
export const getTasksEffectFx = createEffect(getTasks);
export const createTaskEffectFx = createEffect(createTask);
export const updateTaskEffectFx = createEffect(updateTask);
export const setTasksEffectFx = createEffect((tasks: Task[]) => tasks);

/**
 * Sets tasks llist
 */
$tasks.on(getTasksEffectFx.done, (_, { result }) => result.tasks);

/**
 * Add newly added task to tasks list
 */
$tasks.on(createTaskEffectFx.done, (state, { result }) => [result.task, ...state]);

/**
 * Updates task in tasks list
 */
$tasks.on(updateTaskEffectFx.done, (state, { result }) => {
  // Find index of the task
  const index = state.findIndex(item => result && result.task && item._id === result.task._id);
  // Replace task at found index with new data
  const newState = [ ...state ].map((item, i) => i === index && result.task ? result.task : item);

  newState.sort((a, b) => b.orderScore - a.orderScore);

  return newState;
});

/**
 * Updates tasks list
 */
$tasks.on(setTasksEffectFx.done, (_, { result }) => [ ...result ]);