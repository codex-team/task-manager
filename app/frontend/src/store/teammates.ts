import Teammate from 'types/entities/teammate';
import { createStore, createEffect } from 'effector';
import { createTeammate, getTeammates } from 'services/teammates';

/**
 * Teammates store
 */
export const $teammates = createStore<Teammate[]>([]);

/**
 * Teammates effects
 */
export const getTeammatesFx = createEffect(getTeammates);
export const createTeammateFx = createEffect(createTeammate);

/**
 * State changes based on effects results
 */
$teammates.on(getTeammatesFx.done, (state, { result }) => result.teammates);
$teammates.on(createTeammateFx.done, (state, { result }) => [...state, result.teammate]);

