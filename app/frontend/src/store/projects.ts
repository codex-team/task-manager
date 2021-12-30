import { createStore, createEffect } from 'effector';
import { createProject, getProjects } from 'services/projects';
import { Project } from 'types/entities';

/**
 * Projects store
 */
export const $projects = createStore<Project[]>([]);

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