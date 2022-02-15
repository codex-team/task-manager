import { createStore, createEffect, createEvent } from 'effector';
import { createProject, getProjects } from 'services/projects';
import { Project } from 'types/entities';
import { changeTaskStatusFx } from './tasks';
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

