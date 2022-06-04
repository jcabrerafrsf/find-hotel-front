import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../interfaces/user';
import { select, Store } from '@ngrx/store';
import {
  ClearData,
  Login,
  LoginError,
  LoginSuccess,
} from '../pages/login/store/auth.actions';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient, private store: Store) {}

  public login(user: User) {
    this.store.dispatch(new Login());
    return this.httpClient
      .post<any>(environment.authUrl, { ...user })
      .pipe((data) => {
        data.subscribe({
          next: ({ member }) =>
            this.store.dispatch(
              new LoginSuccess({ member, remember: user.remember_me })
            ),
          error: (e) => this.store.dispatch(new LoginError(e.error?.error)),
        });
        return data;
      });
  }

  public logout() {
    this.store.dispatch(new ClearData());
  }

}
