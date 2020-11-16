import { formatDate } from '@angular/common';
import { Component, OnInit  } from '@angular/core';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  // values used
  leagues = [
    { name: 'ligue 1', value: '2664', shown: true},
    { name: 'Premier League', value: '2790', shown: true},
    { name: 'Serie A', value: '2857', shown: true},
    { name: 'Bundesligua', value: '2755', shown: true},
    { name: 'Primera division', value: '2833', shown: true},
    { name: 'UEFA Champions League', value: '2020', shown: true},
    { name: 'league one', value: '2803', shown: true}];

  // date used for getting matches
  date;
  // list of matches shown
  matches = [];
  // list of matches loaded
  stagedMatches;

  constructor(private match: MatchService) { }

  ngOnInit(): void {
    // refactor today's date to fit the API
    this.date = formatDate(new Date(), 'yyyy-MM-dd', 'en');
    this.chooseDay(this.date);
  }
  activateFilter(selected){
    this.leagues.forEach(league => {
      if (league.value === selected.value) {
        league.shown = !league.shown;
        if (league.shown === false){
          this.matches = this.matches.filter(filtered => filtered.league_id !== selected.value);
        }
        if (league.shown === true){
          this.matches = this.matches.concat(this.stagedMatches.filter(filtered => filtered.league_id === selected.value));
        }
      }
    });
  }

  async chooseDay(date){
        // call API with the date get all matches by date
        this.leagues.forEach(element => {

          this.match.getMatchesByDateAndLeague(date, element.value).subscribe((response) => {
            // set data to list of matches shown
              this.matches = this.matches.concat(response.fixtures);
              this.stagedMatches = this.matches;
            });
        });

  }

}
