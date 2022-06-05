import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  StoreModule,
  ActionReducer,
  MetaReducer,
} from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { localStorageSync } from 'ngrx-store-localstorage';
import * as fromAuthReducer from 'src/app/pages/login/store/auth.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './pages/login/store/auth.effects';

export function localStorageSyncReducer(
  reducer: ActionReducer<any>
): ActionReducer<any> {
  return localStorageSync(
    {keys: ['auth'],
     rehydrate: true})(reducer);
}
const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    StoreModule.forRoot(fromAuthReducer.reducer, { metaReducers }),
    EffectsModule.forRoot([AuthEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
