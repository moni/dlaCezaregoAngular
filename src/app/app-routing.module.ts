import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AllNewsComponent} from './news/components/all-news/all-news.component';
import {TodayNewsComponent} from './news/components/today-news/today-news.component';
import {RegisterComponent} from "./auth/components/register/register.component";
import {LoginComponent} from "./auth/components/login/login.component";
import {FavoritesComponent} from "./news/components/favorites/favorites.component";
import {AuthGuardService} from "./auth-guard.service";

const appRoutes: Routes = [
  {path: '', pathMatch: 'full', component: TodayNewsComponent},
  {path: 'all', pathMatch: 'full', component: AllNewsComponent},
  {path: 'favorites', pathMatch: 'full', component: FavoritesComponent, canActivate: [AuthGuardService]},
  {path: 'register', pathMatch: 'full', component: RegisterComponent},
  {path: 'login', pathMatch: 'full', component: LoginComponent},
  {path: '**', redirectTo: '/'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
