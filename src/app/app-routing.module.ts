import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ComparativeSearchComponent } from './components/comparative/comparative-search/comparative-search.component';
import { ComparativeMatchHistoryComponent } from './components/comparative/comparative-match-history/comparative-match-history.component';
import { StatsMatchComponent } from './components/stats-match/stats-match.component';
import { HomePageComponent } from './components/home/home-page/home-page.component';

const routes: Routes = [
    { path: '', component: ComparativeSearchComponent },
    { path: 'stats-match/:match', component: StatsMatchComponent },
    { path: 'compare/:ID_team1/:ID_team2', component: ComparativeMatchHistoryComponent },
    { path: 'card', component: HomePageComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
