import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './component/header/header.component';
import {ClockComponent} from './component/clock/clock.component';
import {ProfileHooverComponent} from './component/profile-hoover/profile-hoover.component';
import {DashboardComponent} from './component/dashboard/dashboard.component';
import {ExchangeComponent} from './component/exchange/exchange.component';
import {RatesComponent} from './component/rates/rates.component';
import {HistoryComponent} from './component/history/history.component';
import {LeaderboardComponent} from './component/leaderboard/leaderboard.component';
import {AboutComponent} from './component/about/about.component';
import {FooterComponent} from './component/footer/footer.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {PostComponent} from './post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ClockComponent,
    ProfileHooverComponent,
    DashboardComponent,
    ExchangeComponent,
    RatesComponent,
    HistoryComponent,
    LeaderboardComponent,
    AboutComponent,
    FooterComponent,
    PostComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
