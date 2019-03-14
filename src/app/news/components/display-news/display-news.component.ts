import {Component, Input, OnInit,} from '@angular/core';

import {AuthService} from '../../../auth/auth.service';
import {NewsService} from '../../news.service';

@Component({
  selector: 'app-display-news',
  templateUrl: './display-news.component.html',
  styleUrls: ['./display-news.component.scss'],
})
export class DisplayNewsComponent implements OnInit {
  @Input() news: Array<object>;
  public showMessageToAuth = false;
  public selectedNewsIndex: number;
  public favoritesIds: Array<string>;

  constructor(private authService: AuthService, private newsService: NewsService) {
  }

  ngOnInit() {
    if (this.isAuthenticated()) {
      this.newsService.getFavoritesIds().subscribe(newsIds =>
      this.favoritesIds = newsIds as Array<string>)
    }
  }

  isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }

  isFavorite(itemId: string): boolean {
    if (!!this.favoritesIds) {
      return this.favoritesIds.includes(itemId);
    }
  }

  updateFavoritesIds(newsId: string): void {
    if (this.favoritesIds.includes(newsId)) {
      const newsIndex = this.favoritesIds.indexOf(newsId);
      this.favoritesIds.splice(newsIndex, 1);
    } else {
      this.favoritesIds.push(newsId);
    }
  }

  updateFavorites(newsId: string) {
    this.updateFavoritesIds(newsId);
    return this.newsService.updateFavoritesNews(newsId);
  }

  toggleMessageAboutLogin(index: number): void {
    this.showMessageToAuth = !this.showMessageToAuth;
    this.selectedNewsIndex = this.selectedNewsIndex ? null : index;
  }

}
