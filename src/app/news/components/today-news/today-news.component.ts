import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";

import {NewsService} from '../../news.service';


@Component({
  selector: 'app-today-news',
  templateUrl: './today-news.component.html',
  styleUrls: ['../display-news/display-news.component.css']
})
export class TodayNewsComponent implements OnInit {
  public todayNews: Array<object>;

  constructor(private newsService: NewsService) {
  }

  ngOnInit() {
    this.newsService.getTodayNews().subscribe(news => {
      this.todayNews = news;
    });
  }
}

