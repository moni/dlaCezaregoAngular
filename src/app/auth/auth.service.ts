import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token = new BehaviorSubject<any>('');

  constructor(private httpClient: HttpClient) {
  }

  updateToken(token: string): void {
    this.token.next(token);
  }

  registerUser(email: string, password: string): Observable<any> {
    return this.httpClient.post<any>(`${environment.apiUrl}/auth/register`, {email, password});
  }

  loginUser(email, password): Observable<any> {
    return this.httpClient.post<any>(`${environment.apiUrl}/auth/login`, {email, password});
  }

  getToken(): BehaviorSubject<any> {
    return this.token;
  }
}
