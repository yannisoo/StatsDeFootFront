import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RechercheComparatifComponent } from './recherche-comparatif/recherche-comparatif.component';
import { MatchHistoryComparativeComponent } from './match-history-comparative/match-history-comparative.component';
import { StatsMatchComponent } from './stats-match/stats-match.component';

const routes: Routes = [
  { path: '', component: RechercheComparatifComponent },
  { path: 'compare/:team1/:team2', component: MatchHistoryComparativeComponent },
  { path: 'stats-match/:match', component: StatsMatchComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
