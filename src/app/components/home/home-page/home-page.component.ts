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
  leagues = [];

  // date used for getting matches
  date;
  // list of matches shown
  matches = [];
  // list of matches loaded
  stagedMatches;
  // check whether filter is on or nope
  filterOn = false;

  toggle = false;
  isLoaded = false;
  tempDate;

  constructor(
    private match: MatchService,
    private router: Router
    ) { }

  ngOnInit(): void {
    console.log(this.matches == null)
    // refactor today's date to fit the API
    this.date = new Date()
    this.chooseDay(this.date);
  }
  changeDay(value){
    this.date = new Date(
    this.date.getFullYear(),
    this.date.getMonth(),
    this.date.getDate() + value);
    console.log(this.date)
    this.chooseDay(this.date)
  }
  GetLeagues(){
    this.leagues = []
    this.matches.forEach(element => {
      let value = element.league
      value.value = element.league_id
      value.shown = false
      console.log(value)
      var index = this.leagues.findIndex(x => x.name == value.name);
      index === -1 ? this.leagues.push(value) : console.log("object already exists")
      
      console.log(this.leagues)
    });
  }
  activateFilter(selected){
    if (this.filterOn === true){
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
    if (this.filterOn === false){
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
        // this.leagues.forEach(element => {

        //   this.match.getMatchesByDateAndLeague(date, element.value).subscribe((response) => {
        //     // set data to list of matches shown
        //       this.matches = this.matches.concat(response.fixtures);
        //       this.stagedMatches = this.matches;
        //     });
        // });
        this.isLoaded = false
        this.matches = [];
        date = formatDate(date, 'yyyy-MM-dd', 'en')
        this.match.getMatchesByDate(date).subscribe((response) => {
          // set data to list of matches shown
            this.matches = response.fixtures;
            this.stagedMatches = this.matches;``
            this.isLoaded = true
            console.log(this.matches)
            this.GetLeagues()
          });

  }
  filter(bool){
    if(bool === 1){
      this.toggle = false;
    }else{
      this.toggle = true;
    }
    console.log(this.toggle)
  }
  findMatch( home, away){
    this.router.navigate(['/compare/' + home + '/' + away]);
  }
}
