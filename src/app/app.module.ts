import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { LOCALE_ID } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
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
import { SidebarComponent } from './components/_utils/sidebar/sidebar.component';
import { HeaderComponent } from './components/_utils/header/header.component';
import { MatchesAverageComponent } from './components/comparative/comparative-match-history/matches-average/matches-average.component';
import { SearchBarComponent } from './components/_utils/search-bar/search-bar.component';
import { PourcentagePassComponent } from './components/statistics/pourcentage-pass/pourcentage-pass.component';
import { SpinnerComponent } from './components/_utils/spinner/spinner.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatIconModule} from '@angular/material/icon';
import { WinstreakComponent } from './components/_utils/winstreak/winstreak.component';

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
    HomePageComponent,
    SidebarComponent,
    HeaderComponent,
    MatchesAverageComponent,
    SearchBarComponent,
    PourcentagePassComponent,
    SpinnerComponent,
    WinstreakComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    MatIconModule,
    CommonModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'fr' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
