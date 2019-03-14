import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import * as jwt_decode from 'jwt-decode';

import {environment} from '../../environments/environment';
import {Router} from '@angular/router';
import {UserInterface} from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token = new BehaviorSubject<any>('');
  public statusCode = new BehaviorSubject<number | string>('');
  public authFlag: boolean = true;
  public userId: string;

  constructor(private httpClient: HttpClient, private router: Router) {
  }

  updateToken(token: any): void {
    this.token.next(token.token);
  }

  updateStatusCode(statusCode: number | string): void {
    this.statusCode.next(statusCode);
  }

  registerUser(email: string, password: string): Observable<UserInterface> {
    return this.httpClient.post<UserInterface>(`${environment.apiUrl}/auth/register`, {email, password});
  }

  loginUser(email, password): Observable<UserInterface> {
    return this.httpClient.post<UserInterface>(`${environment.apiUrl}/auth/login`, {email, password});
  }

  getToken(): BehaviorSubject<any> {
    return this.token.value;
  }

  isAuthenticated(): boolean {
    return !!(this.token.getValue());
  }

  logOutUser(): BehaviorSubject<any> {
    this.updateToken('');
    this.updateStatusCode('');
    this.userId = null;
    return this.token
  }

  navigate(path: string): void {
    this.router.navigate([path]);
  }

  decodeToken(token: any): string {
    return this.userId = jwt_decode(token.token)._id;
  }

  clearErrorMessage(): void {
    this.statusCode.next('');
    this.authFlag = true;
  }
}
