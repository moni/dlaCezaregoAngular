import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  public allNews: any;
  public todayNews: any;

  constructor(private httpClient: HttpClient) { }

  getNews() {
    this.httpClient.get(`${environment.apiUrl}/news`)
      .subscribe(response => {
        this.allNews = response;
      });
  }

  getTodayNews() {
    this.httpClient.get(`${environment.apiUrl}/news/today`)
      .toPromise()
      .then(response => {
        this.todayNews = response;
      })
      .catch(error => console.error(error));
  }
}
