import {Component, OnInit} from '@angular/core';

import {NewsInterface} from "../../../interfaces/news.interface";
import {NewsService} from "../../news.service";

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  public news: Array<NewsInterface>;
  public sources: string;
  public dateFrom: string;
  public dateTo: string;

  constructor(private newsService: NewsService) {
  }

  ngOnInit() {
    this.newsService.getNews().subscribe(news =>
      this.news = news as Array<NewsInterface>
    );
    this.dateFrom = "2018-12-31T23:00:00.000Z";
    this.dateTo = new Date(new Date().setDate(new Date().getDate() + 1)).toISOString();
    this.newsService.getNewsSourcesNames().subscribe(sourcesNames => {
      const names = sourcesNames as Array<string>;
      this.sources = names.toString();
    });
  }

  onDateChanges(dateRange: any): void {
    this.news = null;
    this.dateFrom = !!dateRange.dateFrom ? new Date(dateRange.dateFrom).toISOString() : this.dateFrom;
    this.dateTo = !!dateRange.dateTo ? new Date(new Date().setDate(new Date(dateRange.dateTo).getDate())).toISOString() : this.dateTo;
    this.updateNewsBySourcesNamesAndDate();
  }

  onSourcesChanges(sources: string): void {
    this.news = null;
    this.sources = sources;
    this.updateNewsBySourcesNamesAndDate();
  }

  public updateNewsBySourcesNamesAndDate(): void {
    !!this.sources ? this.newsService.getNewsBySourcesNamesAndDate(this.sources, this.dateFrom, this.dateTo)
      .subscribe(news =>
        this.news = news as Array<NewsInterface>
    ) : this.news = [];
  }

}
