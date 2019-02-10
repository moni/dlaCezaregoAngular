import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  public allNews: any;
  public todayNews: any;

  constructor(private httpClient: HttpClient) { }

  getNews() {
    this.httpClient.get('http://localhost:3000/news')
      .subscribe(response => {
        this.allNews = response;
      });
  }

  getTodayNews() {
    this.httpClient.get('http://localhost:3000/news/today')
      .toPromise()
      .then(response => {
        this.todayNews = response;
      })
      .catch(error => console.error(error));
  }
}
