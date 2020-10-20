import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { MatchService } from '../services/match.service';

@Component({
  selector: 'app-match-history-comparative',
  templateUrl: './match-history-comparative.component.html',
  styleUrls: ['./match-history-comparative.component.css']
})
export class MatchHistoryComparativeComponent implements OnInit {
  data;
  resettable;
  firstTeam;
  secondTeam;
  currentMatches;

  constructor(
    private route: ActivatedRoute,
    private match: MatchService
    ) { }

  ngOnInit(): void {
    let IDteam1 = this.route.snapshot.params.ID_team1
    let IDteam2 = this.route.snapshot.params.ID_team2
    this.match.getPreviousMatchesBetween2Teams(IDteam1, IDteam2).subscribe((response) => {
      this.data = response;
      this.firstTeam = this.data.teams[0];
      this.secondTeam = this.data.teams[1];
      this.currentMatches = this.data.fixtures.reverse();
      console.log(this.currentMatches);
    });
  }

  resetTeamSelected(){
  }

}
