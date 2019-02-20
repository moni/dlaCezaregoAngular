import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayNewsComponent } from './components/display-news/display-news.component';
import { AllNewsComponent } from './components/all-news/all-news.component';
import { TodayNewsComponent } from './components/today-news/today-news.component';
import {RouterModule} from '@angular/router';

@NgModule({

  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [AllNewsComponent, DisplayNewsComponent, TodayNewsComponent],

})
export class NewsModule { }
