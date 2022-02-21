import { createFeatureSelector, createSelector } from '@ngrx/store';

import { appState } from './state';

export const FEATURE_NAME = 'appState';
export const state = createFeatureSelector<appState>(FEATURE_NAME);

export const selectUserName = createSelector(
  state,
  (state: appState) => state.appState.userName
);
