import {Component, OnInit} from '@angular/core';

import {NewsService} from "../../news.service";

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  public favorites = [];

  constructor(private newsService: NewsService) {
  }

  ngOnInit() {
    if (!!this.newsService.favorites) {
      this.favorites = this.newsService.favorites;
    } else {
      setTimeout(() => {
        this.favorites = this.newsService.favorites;
      }, 300);
    }
  }

}
