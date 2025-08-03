import { createReducer, on } from '@ngrx/store';
import { userDetailsAction } from './user-details.action';
import { UserDetailsInterface } from '../store.interface';

const initialState: UserDetailsInterface = {
  access_token: 'dggsjksvhsu',
  email: '',
  user_id: '',
};

export const userDetailsReducer = createReducer(
  initialState,
  on(userDetailsAction, (state, payload) => {
    return {
      access_token: payload.access_token,
      user_id: payload.user_id,
      email: payload.email,
    };
  })
);
