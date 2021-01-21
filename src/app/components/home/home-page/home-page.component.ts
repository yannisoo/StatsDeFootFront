import { formatDate } from '@angular/common';
import { Component, OnInit  } from '@angular/core';
import { Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  // values used
  leagues = [
    { name: 'Ligue 1 Uber Eats', value: 2664, shown: false},
    { name: 'Primera division', value: 2833, shown: false},
    { name: 'UEFA Champions League', value: 2020, shown: false},
    { name: 'league one', value: 2803, shown: false},
    { name: 'Ligue 2 BKT', value: 2652, shown: false},
    { name: 'Coupe de France', value: 2652, shown: false},
    { name: 'LaLiga Smartbank', value: 2847, shown: false},
    { name: 'Copa Del Rey', value: 3046, shown: false},
    { name: 'Premier League', value: 2790, shown: false},
    { name: 'Championship', value: 2794, shown: false},
    { name: 'FA Cup', value: 2781, shown: false},
    { name: 'Serie A', value: 2857, shown: false},
    { name: 'Serie B', value: 2946, shown: false},
    { name: 'Coppa Italia', value: 2941, shown: false},
    { name: 'Bundesliga', value: 2755, shown: false},
    { name: '2e Bundesliga', value: 2781, shown: false},
    { name: 'DFB-Pokal', value: 2677, shown: false},
    { name: 'Bundesligua', value: 2755, shown: false},
    { name: 'UEFA Champions League', value: 2771, shown: false},
    { name: 'UEFA Europa League', value: 2777, shown: false},
    { name: 'Eredisivie', value: 2673, shown: false},
    { name: 'Liga NOS', value: 2826, shown: false},
    { name: 'Jupiler Pro League', value: 2660, shown: false},
    { name: 'Premier-Liga', value: 2679, shown: false},
    { name: 'Süper Lig', value: 2816, shown: false},
    { name: 'Super League', value: 2855, shown: false},
    { name: 'Premier-Liha', value: 2762, shown: false},
    { name: 'Superleague Elláda', value: 2874, shown: false},
    { name: 'UEFA Euro Championship', value: 403, shown: false},
    { name: 'UEFA Nations League', value: 1422, shown: false},
    { name: 'Copa America', value: 1321, shown: false},
    { name: 'CAN', value: 1030, shown: false},
    { name: 'Amicaux', value: 1324, shown: false}
  ];

  // date used for getting matches
  date;
  // list of matches shown
  matches = [];
  // list of matches loaded
  stagedMatches;
  // check whether filter is on or nope
  filterOn = false;

  constructor(
    private match: MatchService,
    private router: Router
    ) { }

  ngOnInit(): void {
    // refactor today's date to fit the API
    this.date = formatDate(new Date(), 'yyyy-MM-dd', 'en');
    this.chooseDay(this.date);
  }
  activateFilter(selected){
    if(this.filterOn === true){
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
    if(this.filterOn === false){
      this.leagues.forEach(league => {
        if (league.value === selected.value) {
            league.shown = true;
            this.matches = this.matches.filter(filtered => filtered.league_id === selected.value);
        }
        this.filterOn = true;
      });
    }
    
  }

  async chooseDay(date){
        // call API with the date get all matches by date
        this.leagues.forEach(element => {

          this.match.getMatchesByDateAndLeague(date, element.value).subscribe((response) => {
            // set data to list of matches shown
              this.matches = this.matches.concat(response.fixtures);
              this.stagedMatches = this.matches;
              console.log(this.matches)
            });
        });
        // this.match.getMatchesByDate(date).subscribe((response) => {
        //   // set data to list of matches shown
        //     this.matches = this.matches.concat(response.fixtures);
        //     this.stagedMatches = this.matches;
        //   });

  }
  findMatch( home, away){
    this.router.navigate(['/compare/' + home + '/' + away]);
  }
}
