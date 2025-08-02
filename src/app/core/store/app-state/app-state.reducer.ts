import { createReducer, on } from '@ngrx/store';
import { AppInitInterface } from '../store.interface';
import { loadingAction } from './app-state.actions';

const initialState: AppInitInterface = { loading: false };

export const initAppReducer = createReducer(
  initialState,
  on(loadingAction, (state, payload) => {
    return { ...state, loading: payload.loading };
  })
);
