import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {AuthService} from '../../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
  ) {}

  ngOnInit() {
    this.authService.updateStatusCode('');
    this.authService.authFlag = true;
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      const email = this.registerForm.controls.email.value;
      const password = this.registerForm.controls.password.value;
      this.authService.loginUser(email, password)
        .subscribe(token => {
          this.authService.decodeToken(token);
          this.authService.updateToken(token);
          this.authService.navigate('favorites');
        });
    }
  }

  closeErrorMessage(): void {
    return this.authService.clearErrorMessage();
  }
}
