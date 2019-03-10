import { Injectable } from '@angular/core';

import { AuthService } from './auth/auth.service';
import { CanActivate } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthService) {}

  canActivate(): boolean {
    if (!!this.authService.userId) {
      return true;
    };
    this.authService.navigate('login');
    return false;
  };

}
