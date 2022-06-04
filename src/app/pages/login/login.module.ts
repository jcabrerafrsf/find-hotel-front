import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';


import * as fromAuthReducer from './store/auth.reducer';
import { AuthEffects } from './store/auth.effects';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    StoreModule.forFeature('auth', fromAuthReducer.reducer),
    EffectsModule.forRoot([AuthEffects])
  ]
})
export class LoginModule { }
