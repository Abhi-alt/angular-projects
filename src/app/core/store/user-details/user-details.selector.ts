import { createSelector } from '@ngrx/store';
import { AppState } from '../store.interface';

export const userDetailSelector = createSelector(
  (state: AppState) => state.user,
  (user) => user
);
