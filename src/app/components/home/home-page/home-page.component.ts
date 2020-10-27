import { formatDate } from '@angular/common';
import { Component, OnInit  } from '@angular/core';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  // date used for getting matches
  date
  // list of matches shown
  matches

  constructor(private match: MatchService) { }

  ngOnInit(): void {
    // refactor today's date to fit the API 
    this.date = formatDate(new Date(), 'yyyy-MM-dd', 'en');
    // call API with the date get all matches by date
    this.match.getMatchesByDate(this.date).subscribe((response) => {
    // set data to list of matches shown
      this.matches = response.fixtures;
    // sort data by league_id
      this.matches.sort(function (a,b){
        return a.league_id - b.league_id;
      })
    })
  }

}
