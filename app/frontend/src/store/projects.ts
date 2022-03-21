import { createStore, createEffect, createEvent } from 'effector';
import { createProject, getProjects, updateProject } from 'services/projects';
import { Project } from 'types/entities';

/**
 * Describes data needed to move task from one column to another
 */
export interface TaskMoveData {
  taskId: string,
  prevStatusId?: string | null,
  newStatusId?: string,
  newIndex?: number
}

/**
 * Stores list of all projects
 */
export const $projects = createStore<Project[]>([]);

/**
 * Stores selected project
 * Equals null in case no project is selected
 */
export const $selectedProject = createStore<Project | null>(null);

/**
 * Event to be called when selected project state should be updated
 */
export const projectSelected = createEvent<Project | null>();

/**
 * Projects effects
 */
export const getProjectsFx = createEffect(getProjects);
export const createProjectFx = createEffect(createProject);
export const updateProjectFx = createEffect(updateProject);


/**
 * Event to be called when task moved
 */
export const taskMoved = createEvent<TaskMoveData>();

/**
 * Event to be called when task created
 */
export const taskCreated = createEvent<{ taskId: string, statusId?: string | null }>();

/**
 * State changes based on effects results
 */
$projects.on(getProjectsFx.done, (_, { result }) => result.projects);
$projects.on(createProjectFx.done, (state, { result }) => [...state, result.project]);
$projects.on(updateProjectFx.done, (state, { result }) => {
  if (!state || !result.project) {
    return state;
  }
  const resposeProject = result.project;
  // get index of the project
  const projectIndex = state.findIndex((project) => resposeProject._id === project._id);

  if (projectIndex === -1) {
    return state;
  }

  // replace with updated project data
  state[projectIndex] = { ...state[projectIndex],
    ...resposeProject };

  return [ ...state ];
});
$selectedProject.on(projectSelected, (_, value) => value);

/**
 * Updates status once new task is created
 */
$selectedProject.on(taskCreated, (state, data) => {
  if (!state || !data.statusId) {
    return state;
  }
  const statuses = state?.taskStatuses || [];
  const statusToUpdate = statuses.find(item => item._id === data.statusId);

  statusToUpdate?.tasks.push(data.taskId);

  return { ...state };
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
