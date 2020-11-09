import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { MatchService } from '../../../services/match.service';

@Component({
  selector: 'app-comparative-match-history',
  templateUrl: './comparative-match-history.component.html',
  styleUrls: ['./comparative-match-history.component.scss']
})
export class ComparativeMatchHistoryComponent implements OnInit {
  // team 1 info
  firstTeam;
  // team 2 info
  secondTeam;
  // matches shown to users
  currentMatches;
  // both teams info displayed in the menu
  menu;
  // both teams match history
  mixedHistory;
  // team 1 match history
  firstTeamHistory;
  // team 2 match history
  secondTeamHistory;
  component = 'ComparativeMatchHistoryComponent';

  constructor(
    private route: ActivatedRoute,
    private match: MatchService
    ) { }

  ngOnInit(): void {
    // get team IDs from URL
    const IDteam1 = this.route.snapshot.params.ID_team1;
    const IDteam2 = this.route.snapshot.params.ID_team2;
    // call backend to recover data
    this.match.getPreviousMatchesBetween2Teams(IDteam1, IDteam2).subscribe((response) => {
      // set team 1 info
      this.firstTeam = response.teams[0];
      // set team 2 info
      this.secondTeam = response.teams[1];
      // set matches history for both teams
      this.mixedHistory = response.fixtures.reverse();
      // set currentMatches according to value recovered
      this.currentMatches = this.mixedHistory;
      // set value needed in for both teams
      this.menu = response.teams;
      // call backend to recover single team history
      // included in the callback to avoid latency on first print
      this.match.getLast5Matches(IDteam1).subscribe((responseT1) => {
        this.firstTeamHistory = responseT1.fixtures;
      });
      this.match.getLast5Matches(IDteam2).subscribe((responseT2) => {
        this.secondTeamHistory = responseT2.fixtures;
      });
    });

  }

  changeCurrentMatches(id){
    // Created a 3 choice switch to change the data loaded
    switch (id){
      // Case 0: change to history of team 1
      case 0:
        this.currentMatches = this.firstTeamHistory;
        break;
      // Case 1: change to history of both teams
      case 1:
        this.currentMatches = this.mixedHistory;
        break;
      // Case 2: change to history of team 2
      case 2:
        this.currentMatches = this.secondTeamHistory;
        break;
    }
  }

}
