import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subscription} from 'rxjs';

import {AuthService} from '../auth/auth.service';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(
    private httpClient: HttpClient,
    private authService: AuthService) {
  }

  getNews(): Observable<Object> {
    return this.httpClient.get(`${environment.apiUrl}/news`);
  }

  getTodayNews(): Observable<Object> {
    return this.httpClient.get(`${environment.apiUrl}/news/today`);
  }

  getFavorites(): Observable<Object> {
    const id = this.authService.userId;
    return this.httpClient.get(`${environment.apiUrl}/news/${id}/getFavNews`);
  }

  getFavoritesIds(): Observable<Object> {
    const id = this.authService.userId;
    return this.httpClient.get(`${environment.apiUrl}/users/${id}/getFavIds`);
  }

  updateFavorites(newsId: string): Observable<Object> {
    const id = this.authService.userId;
    return this.httpClient.post(`${environment.apiUrl}/users/${id}/updateFav`, {newsId});
  }

  updateFavoritesNews(newsId: string): Subscription {
    return this.updateFavorites(newsId).subscribe(() => {
      this.getFavoritesIds();
      this.getFavorites();
    });
  }

  deleteAllNewsFromUserFavorites(): Subscription {
    const id = this.authService.userId;
    return this.httpClient.post(`${environment.apiUrl}/users/${id}/delAllFav`, null)
      .subscribe(() => {
        this.getFavoritesIds();
        this.getFavoritesIds();
      });
  }

  getNewsSourcesNames(): Observable<Object> {
    return this.httpClient.get(`${environment.apiUrl}/news/apisSources`);
  }

  getNewsBySourcesNamesAndDate(sources: string, dateFrom: string, dateTo: string): Observable<object> {
    return this.httpClient.get(`${environment.apiUrl}/news/newsBySourcesAndDate/`, {params: {sources, dateFrom, dateTo}});
  }

  forceDatabaseUpdate(): Observable<any> {
    return this.httpClient.get(`${environment.apiUrl}/`, { responseType: 'text' });
  }
}
