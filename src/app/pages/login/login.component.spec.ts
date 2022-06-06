import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Store, StoreModule } from '@ngrx/store';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginComponent } from './login.component';
import { of } from 'rxjs';
import {
  Login,
  AuthActionTypes
} from 'src/app/pages/login/store/auth.actions';
import * as fromAuthReducer from 'src/app/pages/login/store/auth.reducer';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  const storeMock = {
    select() {
      return of({ name: 'Peter', registrationDate: '11/11/18' });
    },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        StoreModule.forRoot({}),
        RouterTestingModule,
      ],
      providers: [{ provide: Store, useValue: storeMock }],
    }).compileComponents();

  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    fromAuthReducer.initialState.data = null;
  });

  it('should create login component', () => {
    expect(component).toBeTruthy();
  });

  it('should create login form', () => {
    expect(component.loginForm).toBeTruthy();
  });

  it('should return invalid form when only username was loaded', () => {
    const username = component.loginForm.controls['username'];
    username.setValue('u');
    expect(component.loginForm.invalid).toBeTruthy();
  });

  it('should return a valid form when all fields are completed', () => {
    const username = component.loginForm.controls['username'];
    const password = component.loginForm.controls['password'];
    const airline = component.loginForm.controls['airline'];
    const remember_me = component.loginForm.controls['remember_me'];
    username.setValue('jcabrera');
    password.setValue('jcabrera');
    airline.setValue('jcabrera');
    remember_me.setValue('true');
    expect(component.loginForm.valid).toBeTruthy();
  });

  it('should return an error message when a field is not complete', () => {
    const username = component.loginForm.controls['username'];
    username.setValue('jcabrera');
    const button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    fixture.detectChanges();
    const usernameErrorMsg =
      fixture.debugElement.nativeElement.querySelector('small');
    expect(usernameErrorMsg).toBeDefined();
    expect(usernameErrorMsg.innerHTML).toContain('complete all fields');
  });

  it('should create a Login action', () => {
    const action = new Login();
    expect(action.type).toEqual(AuthActionTypes.LOGIN);
  });

  it('should return the pending state when login started', () => {
    const { initialState } = fromAuthReducer;
    initialState.pending = true;
    const state = fromAuthReducer.reducer(undefined, new Login());
    expect(state).toEqual(initialState);
  });

});
