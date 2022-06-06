import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AirlineService } from 'src/app/services/airline.service';
import { Airline } from 'src/app/interfaces/airline';
import { AuthService } from 'src/app/services/auth.service';
import { select, Store } from '@ngrx/store';
import { selectData } from './store/auth.selectors';
import { Observable, Subject, take, takeUntil } from 'rxjs';
import { Router } from '@angular/router';
import { IAuth } from './store/auth.reducer';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm!: FormGroup;
  airlineList: Airline[] = [];
  checkForm = false;
  errorLogin = false;

  private unsubscribe$ = new Subject<void>();
  auth$: Observable<IAuth> | undefined;

  public currentSession?: IAuth;

  constructor(
    private formBuilder: FormBuilder,
    private airlineService: AirlineService,
    private authService: AuthService,
    private store: Store,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.auth$ = this.store.select(selectData);
    this.auth$.pipe(takeUntil(this.unsubscribe$)).subscribe((state: IAuth) => {
      if (state) {
        this.router.navigate(['/hotels']);
      }
    });

    this.loginForm = this.formBuilder.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
      airline: [null, [Validators.required]],
      remember_me: [true],
    });
  }

  // I search for the airlines after showing the screen to the user.
  ngAfterContentInit() {
    this.airlineService
      .getAirlines()
      .pipe(take(1))
      .subscribe((data) => {
        this.airlineList = data.sort((a, b) => a.name.localeCompare(b.name));
      });
  }

  onSubmit(): void {
    this.loginForm.valid
      ? this.authService.login(this.loginForm.value)
      : (this.checkForm = true);
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.unsubscribe();
  }
}
