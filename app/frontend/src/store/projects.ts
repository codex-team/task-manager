import { createStore, createEffect, createEvent } from 'effector';
import { createProject, getProjects, updateProject } from 'services/projects';
import { Project } from 'types/entities';

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
export const projectSelected = createEvent<Project | null>();

/**
 * Projects effects
 */
export const getProjectsFx = createEffect(getProjects);
export const createProjectFx = createEffect(createProject);
export const updateProjectFx = createEffect(updateProject);

/**
 * State changes based on effects results
 */
$projects.on(getProjectsFx.done, (_, { result }) => result.projects);
$projects.on(createProjectFx.done, (state, { result }) => [...state, result.project]);
$projects.on(updateProjectFx.done, (state, { result }) => {
  // get index of the project
  const projectIndex = state.findIndex((project) => result.project._id === project._id);
  // replace with updated project data
  state[projectIndex] = result.project;
  return state;
});
$selectedProject.on(projectSelected, (_, value) => value);