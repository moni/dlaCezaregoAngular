import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {AuthService} from '../../auth.service';
import {NewsService} from "../../../news/news.service";

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
  ) {
  }

  ngOnInit() {
    this.authService.updateStatusCode('');
    this.authService.authFlag = true;
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit(): void {
    console.log('login onInit', this.authService.statusCode.value);
    if (this.registerForm.valid) {
      const email = this.registerForm.controls.email.value;
      const password = this.registerForm.controls.password.value;
      this.authService.loginUser(email, password)
        .subscribe(token => {
          this.authService.decodeToken(token);
          this.authService.updateToken(token);
          this.authService.statusCode.subscribe(statusCode => {
            if (statusCode === 201) {
              this.authService.navigate('');
            }
          })
        });
    }
  }

  closeErrorMessage(): void {
    return this.authService.clearErrorMessage();
  }
}
