import Teammate from 'types/entities/teammate';
import { createStore, createEffect } from 'effector';
import { createTeammate, getTeammates, removeTeammateById } from 'services/teammates';

/**
 * Teammates store
 */
export const $teammates = createStore<Teammate[]>([]);

/**
 * Teammates effects
 */
export const getTeammatesFx = createEffect(getTeammates);
export const createTeammateFx = createEffect(createTeammate);
export const removeTeammateFx = createEffect(removeTeammateById);

/**
 * State changes based on effects results
 */
$teammates.on(getTeammatesFx.done, (state, { result }) => result.teammates);
$teammates.on(createTeammateFx.done, (state, { result }) => [...state, result.teammate]);
$teammates.on(removeTeammateFx.done, (state, { result }) => {
  const isDeleted = result.result;
  const deletedTeammate = result.teammate;

  if (isDeleted && deletedTeammate !== null) {
    return state.splice(state.findIndex(e => e._id === deletedTeammate._id), 1);
  }
});
