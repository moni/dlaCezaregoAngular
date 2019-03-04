import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token = new BehaviorSubject<any>('');
  public statusCode = new BehaviorSubject<any>('');

  constructor(private httpClient: HttpClient, private router: Router) {
  }

  updateToken(token: string): void {
    this.token.next(token);
  }

  updateStatusCode(statusCode): void {
    this.statusCode.next(statusCode);
  }

  registerUser(email: string, password: string): Observable<any> {
    return this.httpClient.post<any>(`${environment.apiUrl}/auth/register`, {email, password});      ;
  }

  loginUser(email, password): Observable<any> {
    return this.httpClient.post<any>(`${environment.apiUrl}/auth/login`, {email, password});
  }

  getToken(): BehaviorSubject<any> {
    return this.token;
  }

  isAuthenticated(): boolean {
    return !!(this.token.getValue());
  }

  logOutUser(): BehaviorSubject<any> {
    this.updateToken('');
    return this.token
  }

  navigate(path: string): void {
    this.router.navigate([path]);
  }
}
