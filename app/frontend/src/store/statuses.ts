import { createEffect, createStore } from 'effector';
import { getStatuses } from 'services/statuses';
import { Status } from 'types/entities';
import { projectSelected } from './projects';

/**
 * Statuses store
 */
export const $statuses = createStore<Status[]>([]);

/**
 * Statuses effects
 */
export const getStatusesFx = createEffect(getStatuses);

/**
 * State changes based on effects results
 */
$statuses.on(getStatusesFx.done, (_, { result }) => result.statuses);

/* eslint-disable effector/no-watch */
projectSelected.watch(project => {
  if (!project) {
    return;
  }
  getStatusesFx(project._id);
});