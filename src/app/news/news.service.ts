import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable, Subscription} from 'rxjs';
import {AuthService} from "../auth/auth.service";

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  public allNews: any;
  public todayNews: any;
  public favorites: any;

  constructor(
    private httpClient: HttpClient,
    private authService: AuthService) {
  }

  getNews(): Subscription {
    return this.httpClient.get(`${environment.apiUrl}/news`)
      .subscribe(response => {
        this.allNews = response;
      });
  }

  getTodayNews(): Subscription {
    return this.httpClient.get(`${environment.apiUrl}/news/today`)
      .subscribe(response => {
        this.todayNews = response;
      });
  }

  getFavorites(): Subscription {
    const id = this.authService.userId;
    return this.httpClient.get(`${environment.apiUrl}/news/${id}/getFavNews`)
      .subscribe(response => {
        console.log(response);
        this.favorites = response;
      });
  }

  forceDatabaseUpdate(): Observable<any> {
    return this.httpClient.get(`${environment.apiUrl}/`, { responseType: 'text' })
  }
}
