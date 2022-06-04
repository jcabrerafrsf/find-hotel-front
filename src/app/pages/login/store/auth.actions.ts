import { Action } from '@ngrx/store';

export enum AuthActionTypes {
  LOGIN = '[LOGIN: PENDING] LOGIN',
  LOGIN_SUCCESS = '[LOGIN: OK] LOGIN_SUCCESS',
  LOGIN_ERROR = '[LOGIN: ERROR] LOGIN_ERROR',
  CLEAR_DATA = '[LOGIN: CLEAR] CLEAR_DATA'
}

export class Login implements Action {
  readonly type = AuthActionTypes.LOGIN;
  constructor(public payload?: any) {}
}

export class LoginSuccess implements Action {
  readonly type = AuthActionTypes.LOGIN_SUCCESS;
  constructor(public payload: any) {}
}

export class LoginError implements Action {
  readonly type = AuthActionTypes.LOGIN_ERROR;
  constructor(public payload: any) {}
}

export class ClearData implements Action {
  readonly type = AuthActionTypes.CLEAR_DATA;
}

export type AuthActions = Login | LoginSuccess | LoginError | ClearData;
