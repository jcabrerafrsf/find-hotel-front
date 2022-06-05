import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, tap } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import {
  AuthActionTypes,
  Login,
  LoginError,
  LoginSuccess,
} from './auth.actions';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) {}

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType<Login>(AuthActionTypes.LOGIN_SUCCESS),
      tap((action) => {
        localStorage.setItem(
          'remember_me',
          JSON.stringify(action.payload.remember)
        );
        this.router.navigate(['/hotels']);
      })
    ),
    { dispatch: false }
  );

  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType<Login>(AuthActionTypes.CLEAR_DATA),
      tap((action) => {
        sessionStorage.removeItem('remember_me');
        this.router.navigate(['/login']);
      })
    ),
    { dispatch: false }
  );

  error_login$ = createEffect(() =>
    this.actions$.pipe(
      ofType<Login>(AuthActionTypes.LOGIN_ERROR),
      tap((action) => {
        alert("Invalid Username or Password");
      })
    ),
    { dispatch: false }
  );

}
