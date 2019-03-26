import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {NgMultiSelectDropDownModule} from 'ng-multiselect-dropdown';
import {LazyLoadImageModule} from "ng-lazyload-image";

import { DisplayNewsComponent } from './components/display-news/display-news.component';
import { AllNewsComponent } from './components/all-news/all-news.component';
import { TodayNewsComponent } from './components/today-news/today-news.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SourcesMultiSelectDropdownComponent } from './components/sources-multi-select-dropdown/sources-multi-select-dropdown.component';



@NgModule({

  imports: [
    CommonModule,
    RouterModule,
    NgMultiSelectDropDownModule.forRoot(),
    FormsModule, ReactiveFormsModule,
    LazyLoadImageModule,

  ],
  declarations: [AllNewsComponent, DisplayNewsComponent, TodayNewsComponent, FavoritesComponent, SpinnerComponent, SourcesMultiSelectDropdownComponent],

})
export class NewsModule { }
