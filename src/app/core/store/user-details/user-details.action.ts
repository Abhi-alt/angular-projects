import { createAction, props } from '@ngrx/store';
import { UserDetailsInterface } from '../store.interface';

export const userDetailsAction = createAction(
  '[User details action]',
  props<UserDetailsInterface>()
);
