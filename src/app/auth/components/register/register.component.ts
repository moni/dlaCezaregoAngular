import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {AuthService} from '../../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) {
  }

  ngOnInit() {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  reset(): void {
    this.registerForm.reset();
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      const email = this.registerForm.controls.email.value;
      const password = this.registerForm.controls.password.value;
      this.authService.registerUser(email, password).subscribe();
    }
  }

}
