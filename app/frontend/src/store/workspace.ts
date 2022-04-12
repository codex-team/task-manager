import { Workspace } from 'types/entities';
import { createEffect, createStore } from 'effector';
import { getWorkspace, updateWorkspace } from 'services/workspace';

/**
 * workspace store
 */
export const $workspace = createStore<Workspace>({
  _id: '',
  name: '',
  projects: [],
  teammates: [],
});

/**
 * workspace effects
 */
export const getWorkspaceFx = createEffect(getWorkspace);
export const updateWorkspaceFx = createEffect(updateWorkspace);

/**
 * state changes based on effects results
 */
$workspace.on(getWorkspaceFx.done, (state, { result }) => result.workspace === null ? state : result.workspace);
$workspace.on(updateWorkspaceFx.done, (state, { result }) => result.workspace === null ? state: result.workspace);
