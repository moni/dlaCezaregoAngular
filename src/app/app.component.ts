import {Component, OnInit} from '@angular/core';
import {NewsService} from './news/news.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'dlaCezaregoAngular';

  constructor(private newsService: NewsService) {}

 ngOnInit() {
    this.newsService.getNews();
    this.newsService.getTodayNews();
 }
}
