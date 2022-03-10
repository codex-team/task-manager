import { createEffect, createEvent, createStore } from 'effector';
import { changeTaskStatus, createTask, getTasks, updateTask } from 'services/tasks';
import { Task } from 'types/entities';
import getListWithItemReplaced from 'helpers/get-list-with-item-replaced';


/**
 * Tasks store
 */
export const $tasks = createStore<Task[]>([]);

/**
 * Stores selected task
 */
export const $selectedTask = createStore<Task | null>(null);

/**
 * Task effects
 */
export const getTasksFx = createEffect(getTasks);
export const createTaskFx = createEffect(createTask);
export const updateTaskFx = createEffect(updateTask);
export const changeTaskStatusFx = createEffect(changeTaskStatus);

/**
 * Event to be called when tasks list state should be updated
 */
export const listUpdated = createEvent<Task[]>();


/**
 * Event to be called when selected task state should be updated
 */
export const taskSelected = createEvent<Task | null | undefined>();

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
  if (!result.task) {
    return state;
  }

  return getListWithItemReplaced(state, result.task);
});

/**
 * Updates tasks list state
 */
$tasks.on(listUpdated, (_, result) => [ ...result ]);

/**
 * Updates task in tasks list after task status change
 */
$tasks.on(changeTaskStatusFx.done, (state, { result }) => {
  if (!result.task) {
    return state;
  }

  return getListWithItemReplaced(state, result.task);
});

$selectedTask.on(taskSelected, (_, value) => value);
$selectedTask.on(changeTaskStatusFx.done, (_, { result }) => result.task);

