import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NewsModule} from './news/news.module';
import {HttpClientModule} from '@angular/common/http';
import { NavigationComponent } from './navigation/navigation.component';
import {AppRoutingModule} from './app-routing.module';
import {NewsService} from './news/news.service';
import {AuthModule} from "./auth/auth.module";


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NewsModule,
    AuthModule
  ],
  providers: [NewsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
