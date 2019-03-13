import {Component, OnInit} from '@angular/core';

import {NewsService} from '../../news.service';

@Component({
  selector: 'app-all-news',
  templateUrl: './all-news.component.html',
  styleUrls: ['./all-news.component.css']
})
export class AllNewsComponent implements OnInit {
  public allNews: any;

  constructor(private newsService: NewsService) {
  }

  ngOnInit() {
    this.newsService.getNews().subscribe(news => {
      this.allNews = news;
    });
  }

}
