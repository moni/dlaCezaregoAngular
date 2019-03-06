import {Component, OnInit} from '@angular/core';
import {NewsService} from '../../news.service';
import {Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-today-news',
  templateUrl: './today-news.component.html',
  styleUrls: ['../display-news/display-news.component.css']
})
export class TodayNewsComponent implements OnInit {
  public todayNews = [];

  constructor(private newsService: NewsService) {
  }

  ngOnInit() {
    if (!!this.newsService.todayNews) {
      if (this.newsService.todayNews.length === 0) {
        this.newsService.forceDatabaseUpdate()
      }
      this.todayNews = this.newsService.todayNews;
    } else {
      this.forceDatabaseUpdate().subscribe(response => {
        setTimeout(() => {
          this.todayNews = this.newsService.todayNews;
        }, 2000);
      });

    }
  }

  forceDatabaseUpdate(): Observable<any> {
    return this.newsService.forceDatabaseUpdate();
  }
}

