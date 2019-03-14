import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";

import {NewsService} from '../../news.service';
import {NewsInterface} from '../../../interfaces/news.interface';


@Component({
  selector: 'app-today-news',
  templateUrl: './today-news.component.html',
  styleUrls: ['../display-news/display-news.component.css']
})
export class TodayNewsComponent implements OnInit {
  public todayNews: Array<NewsInterface>;

  constructor(private newsService: NewsService) {
  }

  ngOnInit() {
    this.newsService.getTodayNews().subscribe(news => {
      this.todayNews = news as Array<NewsInterface>;
    });
  }
}

