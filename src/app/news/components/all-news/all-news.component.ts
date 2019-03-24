import {Component, OnInit} from '@angular/core';

import {NewsService} from '../../news.service';
import {NewsInterface} from '../../../interfaces/news.interface';

@Component({
  selector: 'app-all-news',
  templateUrl: './all-news.component.html',
  styleUrls: ['./all-news.component.css']
})
export class AllNewsComponent implements OnInit {
  public allNews: Array<NewsInterface>;

  constructor(private newsService: NewsService) {
  }

  ngOnInit() {
    this.newsService.getNews().subscribe(news =>
      this.allNews = news as Array<NewsInterface>
    );
  }

  public updateNewsBySourcesNames(sources: string) {
    !!sources ? this.newsService.getNewsBySourcesNames(sources).subscribe( news =>
      this.allNews = news as Array<NewsInterface>
    ) : this.allNews = [];
  }
}
