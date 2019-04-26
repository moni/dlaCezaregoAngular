import {Component, Input, OnInit,} from '@angular/core';
import {Subscription} from 'rxjs';

import {AuthService} from '../../../auth/auth.service';
import {NewsService} from '../../news.service';
import {NewsInterface} from '../../../interfaces/news.interface';

@Component({
  selector: 'app-display-news',
  templateUrl: './display-news.component.html',
  styleUrls: ['./display-news.component.scss'],
})
export class DisplayNewsComponent implements OnInit {
  @Input() news: Array<NewsInterface>;
  public showMessageToAuth = false;
  public selectedNewsIndex: number;
  public favoritesIds: Array<string>;

  constructor(private authService: AuthService, private newsService: NewsService) {
  }

  ngOnInit(): void {
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
      if (location.pathname === '/favorites') {
        const unlikedNews = this.news.find(news => news._id === newsId);
        const unlikedNewsId = this.news.indexOf(unlikedNews);
        this.news.splice(unlikedNewsId, 1);
      }
    } else {
      this.favoritesIds.push(newsId);
    }
  }

  updateFavorites(newsId: string): Subscription {
    this.updateFavoritesIds(newsId);
    return this.newsService.updateFavoritesNews(newsId);
  }

  toggleMessageAboutLogin(index: number): void {
    this.showMessageToAuth = !this.showMessageToAuth;
    this.selectedNewsIndex = this.selectedNewsIndex ? null : index;
  }

  showThumbnailPreview(imgUrl, itemId) {

  }
}
