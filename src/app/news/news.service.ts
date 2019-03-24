import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {observable, Observable, Subscription} from 'rxjs';

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
    return this.httpClient.get(`${environment.apiUrl}/news`)
  }

  getTodayNews(): Observable<Object> {
    return this.httpClient.get(`${environment.apiUrl}/news/today`)
  }

  getFavorites(): Observable<Object> {
    const id = this.authService.userId;
    return this.httpClient.get(`${environment.apiUrl}/news/${id}/getFavNews`)
  }

  getFavoritesIds(): Observable<Object> {
    const id = this.authService.userId;
    return this.httpClient.get(`${environment.apiUrl}/users/${id}/getFavIds`)
  }

  updateFavorites(newsId: string): Observable<Object> {
    const id = this.authService.userId;
    return this.httpClient.post(`${environment.apiUrl}/users/${id}/updateFav`, {newsId})
  }

  updateFavoritesNews(newsId: string): Subscription {
    return this.updateFavorites(newsId).subscribe(() => {
      this.getFavoritesIds();
      this.getFavorites();
    });
  }

  deleteAllNewsFromUserFavorites(): Subscription {
    console.log('delete')
    const id = this.authService.userId;
    return this.httpClient.post(`${environment.apiUrl}/users/${id}/delAllFav`, null)
      .subscribe(() => {
        this.getFavoritesIds();
        this.getFavoritesIds();
      })
  }

  getNewsSourcesNames(): Observable<Object> {
    return this.httpClient.get(`${environment.apiUrl}/news/apisSources`)
  }

  getNewsBySourcesNames(sources: string): Observable<object> {
    return this.httpClient.get(`${environment.apiUrl}/news/${sources}/newsBySources`);
  }

  forceDatabaseUpdate(): Observable<any> {
    return this.httpClient.get(`${environment.apiUrl}/`, { responseType: 'text' })
  }
}
