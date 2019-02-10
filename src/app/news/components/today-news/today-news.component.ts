import {Component, OnInit} from '@angular/core';
import {NewsService} from '../../news.service';

@Component({
  selector: 'app-today-news',
  templateUrl: './today-news.component.html',
  styleUrls: ['./today-news.component.css']
})
export class TodayNewsComponent implements OnInit {
  public todayNews = [];

  constructor(private newsService: NewsService) {
  }

  ngOnInit() {
    if (!!this.newsService.todayNews) {
      this.todayNews = this.newsService.todayNews;
      console.log('notimeout today', this.todayNews);
    } else {
      setTimeout(() => {
        this.todayNews = this.newsService.todayNews;
        console.log('timeout today', this.todayNews);
      }, 2000);
    }

  }

}
