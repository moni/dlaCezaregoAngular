import {Component, OnInit} from '@angular/core';

import {NewsService} from '../../news.service';
import {NewsInterface} from '../../../interfaces/news.interface';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  public favorites: Array<NewsInterface>;

  constructor(private newsService: NewsService) {
  }

  ngOnInit() {
    this.newsService.getFavorites().subscribe(news => {
      this.favorites = news as Array<NewsInterface>;
    });
    this.newsService.getFavoritesIds();
  }
}
