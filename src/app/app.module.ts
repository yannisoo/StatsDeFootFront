import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RechercheComparatifComponent } from './recherche-comparatif/recherche-comparatif.component';
import { ItemComponent } from './recherche-comparatif/item/item.component';
import { ComparativeCardComponent } from './comparative-card/comparative-card.component';
import { MatchHistoryComparativeComponent } from './match-history-comparative/match-history-comparative.component';
import { TeamInfoComponent } from './comparative-card/team-info/team-info.component';

@NgModule({
  declarations: [
    AppComponent,
    RechercheComparatifComponent,
    ItemComponent,
    ComparativeCardComponent,
    MatchHistoryComparativeComponent,
    TeamInfoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
