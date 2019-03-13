import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subscription} from 'rxjs';

import {AuthService} from "../auth/auth.service";
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(
    private httpClient: HttpClient,
    private authService: AuthService) {
  }

  getNews(): Observable<any> {
    return this.httpClient.get(`${environment.apiUrl}/news`)
  }

  getTodayNews(): Observable<any> {
    return this.httpClient.get(`${environment.apiUrl}/news/today`)
  }

  getFavorites(): Observable<any> {
    const id = this.authService.userId;
    return this.httpClient.get(`${environment.apiUrl}/news/${id}/getFavNews`)
  }

  getFavoritesIds(): Observable<any> {
    const id = this.authService.userId;
    return this.httpClient.get(`${environment.apiUrl}/users/${id}/getFavIds`)
  }

  updateFavorites(newsId: string) {
    const id = this.authService.userId;
    return this.httpClient.post(`${environment.apiUrl}/users/${id}/updateFav`, {newsId})
  }

  updateFavoritesNews(newsId: string) {
    return this.updateFavorites(newsId).subscribe(() => {
      this.getFavoritesIds();
      this.getFavorites();
    });
  }

  forceDatabaseUpdate(): Observable<any> {
    return this.httpClient.get(`${environment.apiUrl}/`, { responseType: 'text' })
  }

}
