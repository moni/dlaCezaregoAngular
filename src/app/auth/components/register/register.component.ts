import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {AuthService} from '../../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
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

  reset(): void {
    this.registerForm.reset();
  }

  onSubmit(): void {
    this.authService.authFlag = true;
    if (this.registerForm.valid) {
      const email = this.registerForm.controls.email.value;
      const password = this.registerForm.controls.password.value;
      this.authService.registerUser(email, password)
        .subscribe(() => {
          if (this.authService.statusCode.value === 201) {
            this.authService.navigate('login');
          }
        });
    }
  }

  isFieldInvalid(field: string): boolean {
    return !this.registerForm.get(field).valid && this.registerForm.get(field).touched;
  }

  closeErrorMessage(): void {
    return this.authService.clearErrorMessage();
  }

}
