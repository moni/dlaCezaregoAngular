import {Component, OnInit} from '@angular/core';

import {NewsService} from '../../news.service';

@Component({
  selector: 'app-all-news',
  templateUrl: './all-news.component.html',
  styleUrls: ['./all-news.component.css']
})
export class AllNewsComponent implements OnInit {
  public allNews = [];

  constructor(private newsService: NewsService) {
  }

  ngOnInit() {
    if (!!this.newsService.allNews) {
      this.allNews = this.newsService.allNews;
    } else {
      setTimeout(() => {
        this.allNews = this.newsService.allNews;
      }, 2000);
    }
  }

}
