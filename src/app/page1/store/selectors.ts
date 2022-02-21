import { createFeatureSelector, createSelector } from '@ngrx/store';

import { countState } from './state';

export const FEATURE_NAME = 'countState';
export const state = createFeatureSelector<countState>(FEATURE_NAME);

export const selectCount = createSelector(
  state,
  (state: countState) => state.countState.count
);
