import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Subscription} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  public allNews: any;
  public todayNews: any;

  constructor(private httpClient: HttpClient) {
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

  forceDatabaseUpdate(): Subscription {
    return this.httpClient.get(`${environment.apiUrl}/`)
      .subscribe(() => {
        console.log('jest');
      });
  }
}
