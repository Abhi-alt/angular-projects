import { createAction, props } from '@ngrx/store';

export const loadingAction = createAction(
  '[App Loading]',
  props<{ loading: boolean }>()
);
