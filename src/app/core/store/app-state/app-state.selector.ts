import { createSelector } from '@ngrx/store';
import { AppState } from '../store.interface';

export const appSelector = createSelector(
  (state: AppState) => state.app,
  (app) => app
);
