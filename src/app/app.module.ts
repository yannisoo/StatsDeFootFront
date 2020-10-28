import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

import { AppComponent } from './app.component';
import { ComparativeSearchComponent } from './components/comparative/comparative-search/comparative-search.component';
import { ComparativeSearchItemComponent } from './components/comparative/comparative-search/comparative-search-item/comparative-search-item.component';
import { ComparativeCardComponent } from './components/comparative/comparative-card/comparative-card.component';
import { ComparativeMatchHistoryComponent } from './components/comparative/comparative-match-history/comparative-match-history.component';
import { TeamInfoComponent } from './components/_utils/team-info/team-info.component';
import { PossessionPassComponent } from './components/statistics/possession-pass/possession-pass.component';
import { FoulsComponent } from './components/statistics/fouls/fouls.component';
import { StatsMatchComponent } from './components/stats-match/stats-match.component';
import { FoulsTeamComponent } from './components/statistics/fouls/fouls-team/fouls-team.component';
import { MatchPreviewCardComponent } from './components/_utils/match-preview-card/match-preview-card.component';
import { ComparativeMatchHistoryMenuComponent } from './components/comparative/comparative-match-history/comparative-match-history-menu/comparative-match-history-menu.component';
import { ShotsComponent } from './components/statistics/shots/shots.component';
import { ShotsTeamComponent } from './components/statistics/shots/shots-team/shots-team.component';
import { HomeMatchCardComponent } from './components/home/home-match-card/home-match-card.component';
import { HomePageComponent } from './components/home/home-page/home-page.component';


registerLocaleData(localeFr, 'fr');
@NgModule({
  declarations: [
    AppComponent,
    ComparativeSearchComponent,
    ComparativeSearchItemComponent,
    ComparativeCardComponent,
    ComparativeMatchHistoryComponent,
    TeamInfoComponent,
    PossessionPassComponent,
    MatchPreviewCardComponent,
    ComparativeMatchHistoryMenuComponent,
    FoulsComponent,
    StatsMatchComponent,
    FoulsTeamComponent,
    ShotsComponent,
    ShotsTeamComponent,
    HomeMatchCardComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'fr' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
