import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginComponent } from './login.component';
import { AuthGuard } from 'src/app/shared/guards/auth.guard';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let guard: AuthGuard;

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
      providers: [AuthGuard],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    guard = new AuthGuard();
    fixture.detectChanges();
  });

  it('not be able to hit route when user is not logged in', () => {
    let algo = localStorage.setItem('auth', '{"data":null}');
    expect(guard.canActivate()).toBe(false);
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
});
