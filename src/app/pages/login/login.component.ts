import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
      airline: [1, [Validators.required]],
      remember: [true]
    });
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {

      console.log("USER: " + this.loginForm.get('username')?.invalid);
      console.log("USER ERROR: " + this.loginForm.controls['username'].errors);
      console.log("LOGIN NO");

      console.log("RAW: " + this.loginForm.getRawValue().username);

  } else {
    console.log("RAW: " + this.loginForm.getRawValue().username);
  }
    
  }

}
