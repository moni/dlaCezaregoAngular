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
import {tap} from "rxjs/internal/operators";

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
            this.authService.authFlag = true;
            this.authService.updateStatusCode(event.status);
          }
        }, error => {
          this.authService.authFlag = false;
          this.authService.updateStatusCode(error.status);
        })
    );
  }
}
