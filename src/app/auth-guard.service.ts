import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { AuthService } from './auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthService) {}

  canActivate(): boolean {
    if (this.authService.isAuthenticated()) {
      return true;
    }
    this.authService.navigate('login');
    return false;
  };

}
