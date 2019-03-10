import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subscription} from 'rxjs';

import {AuthService} from "../auth/auth.service";
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  public allNews: any;
  public todayNews: any;
  public favorites: any;
  public favoritesIds: any;

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
        this.favorites = response;
      });
  }

  getFavoritesIds(): Subscription {
    const id = this.authService.userId;
    return this.httpClient.get(`${environment.apiUrl}/users/${id}/getFavIds`)
      .subscribe(response => {
        console.log(response)
        this.favoritesIds = response;
      });
  }

  updateFavorites(newsId: string) {
    const id = this.authService.userId;
    return this.httpClient.post(`${environment.apiUrl}/users/${id}/updateFav`, {newsId})
      .toPromise().then(response => {
        console.log('UpdateRes ', response)
      })
  }

  forceDatabaseUpdate(): Observable<any> {
    return this.httpClient.get(`${environment.apiUrl}/`, { responseType: 'text' })
  }

}
