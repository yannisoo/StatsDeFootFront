import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RechercheComparatifComponent } from './recherche-comparatif/recherche-comparatif.component';
import { MatchHistoryComparativeComponent } from './match-history-comparative/match-history-comparative.component';
import { PossessionPassComponent } from './components/statistics/possession-pass/possession-pass.component';
import { StatsMatchComponent } from './stats-match/stats-match.component';

const routes: Routes = [
    { path: '', component: RechercheComparatifComponent },
    { path: 'stats-match/:match', component: StatsMatchComponent },
    { path: 'compare/:ID_team1/:ID_team2', component: MatchHistoryComparativeComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
