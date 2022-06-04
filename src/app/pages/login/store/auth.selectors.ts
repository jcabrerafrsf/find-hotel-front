import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAuth from './auth.reducer';

export const selectAuthState =
  createFeatureSelector<fromAuth.IAuth>('auth');
  
export const selectData = createSelector(
    selectAuthState,
  (state: fromAuth.IAuth) => {
    if (state.isLoginCompleted) {
      return state.data;
    }
  },
);