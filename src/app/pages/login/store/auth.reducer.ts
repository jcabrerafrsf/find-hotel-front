import { Member } from 'src/app/interfaces/member';
import { AuthActions, AuthActionTypes } from './auth.actions';

export interface IAuth {
  data: any;
  pending?: boolean;
  error?: boolean;
  isLoginCompleted?: boolean;
}

export const initialState: IAuth = {
  data: null,
  pending: undefined,
  error: undefined,
  isLoginCompleted: undefined,
};

export function reducer(state: IAuth = initialState, action: AuthActions): any {
  switch (action.type) {
    case AuthActionTypes.LOGIN:
      return {
        ...state,
        pending: true,
      };
    case AuthActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        pending: false,
        isLoginCompleted: true,
        error: false,
        data: action.payload,
      };
    case AuthActionTypes.LOGIN_ERROR:
      return {
        ...state,
        pending: false,
        isLoginCompleted: false,
        error: true,
        data: action.payload,
      };
    case AuthActionTypes.CLEAR_DATA:
      return initialState;
    default:
      return state;
  }
}
