import {Component, OnInit} from '@angular/core';

import {NewsService} from "../../news.service";

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  public favorites: Array<any>;

  constructor(private newsService: NewsService) {
  }

  ngOnInit() {
    this.newsService.getFavorites().subscribe(news => {
      this.favorites = news;
    });
    this.newsService.getFavoritesIds();
  }
}
