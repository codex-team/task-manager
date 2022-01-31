import { createStore, createEffect, createEvent } from 'effector';
import { createProject, getProjects } from 'services/projects';
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
export const getProjectsEffectFx = createEffect(getProjects);
export const createProjectEffectFx = createEffect(createProject);

/**
 * State changes based on effects results
 */
$projects.on(getProjectsEffectFx.done, (_, { result }) => result.projects);
$projects.on(createProjectEffectFx.done, (state, { result }) => [...state, result.project]);
$selectedProject.on(projectSelected, (_, value) => value);