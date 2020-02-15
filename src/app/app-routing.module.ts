import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {DashboardComponent} from './component/dashboard/dashboard.component';
import {ExchangeComponent} from './component/exchange/exchange.component';
import {RatesComponent} from './component/rates/rates.component';
import {HistoryComponent} from './component/history/history.component';
import {LeaderboardComponent} from './component/leaderboard/leaderboard.component';
import {AboutComponent} from './component/about/about.component';
import {LoginComponent} from './component/login/login.component';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'exchange', component: ExchangeComponent},
  {path: 'rates', component: RatesComponent},
  {path: 'history', component: HistoryComponent},
  {path: 'leaderboard', component: LeaderboardComponent},
  {path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
