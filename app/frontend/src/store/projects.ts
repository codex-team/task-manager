import { createStore, createEffect, createEvent } from 'effector';
import { createProject, getProjects } from 'services/projects';
import { Project } from 'types/entities';
import { changeTaskStatusFx, createTaskFx } from './tasks';
import getListWithItemReplaced from 'helpers/get-list-with-item-replaced';

/**
 * Stores list of all projects
 */
export const $projects = createStore<Project[]>([]);

/**
 * Stores selected project
 */
export const $selectedProject = createStore<Project | null>(null);

/**
 * Event to be called when selected project state should be updated
 */
export const projectSelected = createEvent<Project | null | undefined>();

/**
 * Projects effects
 */
export const getProjectsFx = createEffect(getProjects);
export const createProjectFx = createEffect(createProject);


/**
 * Event to be called when task moved
 */
export const taskMoved = createEvent<{ taskId: string, prevStatusId?: string | null, newStatusId?: string | null, newIndex?: number }>();
/**
 * State changes based on effects results
 */
$projects.on(getProjectsFx.done, (_, { result }) => result.projects);
$projects.on(createProjectFx.done, (state, { result }) => [...state, result.project]);
$selectedProject.on(projectSelected, (_, value) => value);

/**
 * Update project statuses once some task status changed
 */
$selectedProject.on(changeTaskStatusFx.done, (state, { result }) => {
  if (!state) {
    return;
  }
  let statuses = state?.taskStatuses || [];

  if (result.prevStatus) {
    statuses = getListWithItemReplaced(statuses, result.prevStatus);
  }
  if (result.newStatus) {
    statuses = getListWithItemReplaced(statuses, result.newStatus);
  }

  return {
    ...state,
    taskStatuses: statuses,
  };
});

/**
 * Update project statuses once new task with specified status added
 */
$selectedProject.on(createTaskFx.done, (state, { result }) => {
  if (!state || !result.status) {
    return state;
  }
  const statuses = state?.taskStatuses || [];

  return {
    ...state,
    taskStatuses: getListWithItemReplaced(statuses, result.status),
  };
});


$selectedProject.on(taskMoved, (state, data) => {
  if (!state || !state.taskStatuses) {
    return;
  }
  const statuses = [ ...state?.taskStatuses ];

  if (!statuses) {
    return state;
  }

  if (data.prevStatusId) {
    const sourceStatus = statuses.find(status => status._id === data.prevStatusId);

    if (sourceStatus) {
      sourceStatus.tasks = sourceStatus.tasks.filter(taskId => taskId !== data.taskId);
    }
  }

  if (data.newStatusId && data.newIndex !== undefined && data.newIndex !== null) {
    const targetStatus = statuses.find(status => status._id === data.newStatusId);

    if (targetStatus) {
      targetStatus.tasks.splice(data.newIndex, 0, data.taskId);
    }
  }

  return {
    ...state,
    taskStatuses: statuses,
  };
});
