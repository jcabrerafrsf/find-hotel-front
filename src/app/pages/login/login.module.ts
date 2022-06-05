import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { StoreModule } from '@ngrx/store';

import * as fromAuthReducer from 'src/app/pages/login/store/auth.reducer';
@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    StoreModule.forFeature('auth', fromAuthReducer.reducer),
  ]
})
export class LoginModule { }
