import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {DashboardComponent} from './dashboard/dashboard.component';
import {ExchangeComponent} from './exchange/exchange.component';
import {RatesComponent} from './rates/rates.component';
import {HistoryComponent} from './history/history.component';
import {LeaderboardComponent} from './leaderboard/leaderboard.component';
import {AboutComponent} from './about/about.component';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
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
