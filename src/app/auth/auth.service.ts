import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) {
  }

  registerUser(email, password) {
    return this.httpClient.post('http://localhost:3000/auth/register',
      {email, password},
      {
        headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'),
      })
      .toPromise()
      .then(response => {
      console.log(response);
    })
      .catch(error => console.error(error));
  }

  loginUser(email, password) {
    return this.httpClient.post('http://localhost:3000/auth/login',
      {email, password},
      {
        headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'),
      })
      .toPromise()
      .then(response => {
        console.log(response);
      })
      .catch(error => console.error(error));
  }
}
