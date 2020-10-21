import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

import { AppComponent } from './app.component';
import { RechercheComparatifComponent } from './recherche-comparatif/recherche-comparatif.component';
import { ItemComponent } from './recherche-comparatif/item/item.component';
import { ComparativeCardComponent } from './comparative-card/comparative-card.component';
import { MatchHistoryComparativeComponent } from './match-history-comparative/match-history-comparative.component';
import { TeamInfoComponent } from './comparative-card/team-info/team-info.component';
import { FoulsComponent } from './fouls/fouls.component';
import { StatsMatchComponent } from './stats-match/stats-match.component';
import { FoulsTeamComponent } from './fouls/fouls-team/fouls-team.component';
import { MatchPreviewCardComponent } from './match-preview-card/match-preview-card.component';
import { MatchHistoryComparativeMenuComponent } from './match-history-comparative/match-history-comparative-menu/match-history-comparative-menu.component';


registerLocaleData(localeFr, 'fr');
@NgModule({
  declarations: [
    AppComponent,
    RechercheComparatifComponent,
    ItemComponent,
    ComparativeCardComponent,
    MatchHistoryComparativeComponent,
    TeamInfoComponent,
    MatchPreviewCardComponent,
    MatchHistoryComparativeMenuComponent,
    FoulsComponent,
    StatsMatchComponent,
    FoulsTeamComponent
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
