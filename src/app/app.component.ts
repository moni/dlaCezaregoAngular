import {Component, HostListener, OnInit} from '@angular/core';

import {NewsService} from './news/news.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'dla Cezarego Angular';

  constructor(private newsService: NewsService) {
  }

  ngOnInit() {
    this.newsService.getNews();
    this.newsService.getTodayNews();
  }

  @HostListener('window:scroll', ['$event'])
  handleArrowVisibility(): void {
    const backToTopArrow = document.getElementById('back-to-top-arrow');
    if (window.pageYOffset < 400) {
      backToTopArrow.classList.add('invisible');
    } else {
      backToTopArrow.classList.remove('invisible');
    }
  }

  backToTop(): void {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }
}
