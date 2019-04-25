import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {NgMultiSelectDropDownModule} from 'ng-multiselect-dropdown';
import {LazyLoadImageModule} from "ng-lazyload-image";
import {
  OWL_DATE_TIME_FORMATS,
  OWL_DATE_TIME_LOCALE,
  OwlDateTimeIntl,
  OwlDateTimeModule,
  OwlNativeDateTimeModule
} from "ng-pick-datetime";
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {DisplayNewsComponent} from './components/display-news/display-news.component';
import {AllNewsComponent} from './components/all-news/all-news.component';
import {TodayNewsComponent} from './components/today-news/today-news.component';
import {FavoritesComponent} from './components/favorites/favorites.component';
import {SpinnerComponent} from './components/spinner/spinner.component';
import {SourcesMultiSelectDropdownComponent} from './components/sources-multi-select-dropdown/sources-multi-select-dropdown.component';
import {DateRangePickerComponent} from './components/date-range-picker/date-range-picker.component';
import {OwlMomentDateTimeModule} from 'ng-pick-datetime-moment';
import {FiltersComponent} from './components/filters/filters.component';

export const MY_MOMENT_FORMATS = {
  parseInput: 'DD-MM-YYYY',
  fullPickerInput: 'DD-MM-YYYY',
  datePickerInput: 'DD-MM-YYYY',
  monthYearLabel: 'MMMM YYYY',
  dateA11yLabel: '',
  monthYearA11yLabel: 'MMMM YYYY',
};

export class OWL_DATE_TIME_SETTINGS extends OwlDateTimeIntl {
  rangeFromLabel = 'Od';
  rangeToLabel = 'Do';
}

@NgModule({

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    RouterModule,
    NgMultiSelectDropDownModule.forRoot(),
    FormsModule, ReactiveFormsModule,
    LazyLoadImageModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    OwlMomentDateTimeModule
  ],
  declarations: [AllNewsComponent, DisplayNewsComponent, TodayNewsComponent, FavoritesComponent, SpinnerComponent, SourcesMultiSelectDropdownComponent, DateRangePickerComponent, FiltersComponent],
  providers: [
    {provide: OWL_DATE_TIME_LOCALE, useValue: 'pl'},
    {provide: OwlDateTimeIntl, useClass: OWL_DATE_TIME_SETTINGS},
    {provide: OWL_DATE_TIME_FORMATS, useValue: MY_MOMENT_FORMATS},
  ]
})
export class NewsModule {
}
