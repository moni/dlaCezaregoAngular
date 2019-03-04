import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse, HttpResponse
} from '@angular/common/http';
import {AuthService} from '../auth/auth.service';
import {Observable, of} from 'rxjs';
import {Router} from "@angular/router";
import {catchError, tap} from "rxjs/internal/operators";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(public authService: AuthService, private router: Router) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.authService.getToken()}`
      }
    });

    return next.handle(request)
      .pipe(
        tap(event => {
          if (event instanceof HttpResponse) {
            console.log('http response', event.status);
            this.authService.updateStatusCode(event.status);
          }
        }, error => {
          console.log('response: ');
          console.log('error status code: ')
          console.error(error.status);
          console.error(error.message);
          console.log('end of response');
        })
    );
  }
}
