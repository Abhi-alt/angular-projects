import { initAppReducer } from './app-state/app-state.reducer';
import { userDetailsReducer } from './user-details/user-details.reducer';

export const store = {
  app: initAppReducer,
  user: userDetailsReducer,
};
