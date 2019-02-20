import {Component, OnInit} from '@angular/core';
import {NewsService} from '../../news.service';

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
      this.todayNews = this.newsService.todayNews;
    } else {
      this.forceDatabaseUpdate();
      setTimeout(() => {
          this.todayNews = this.newsService.todayNews;
      }, 2000);
    };
  }

  forceDatabaseUpdate(): void {
    this.newsService.forceDatabaseUpdate();
  }
}

