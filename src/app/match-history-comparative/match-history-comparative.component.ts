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
  team1;
  team2;
  resettable;
  firstTeam;
  secondTeam;

  constructor(
    private route: ActivatedRoute,
    private match: MatchService
    ) { }

  ngOnInit(): void {
    this.team1 = this.route.snapshot.params.team1;
    this.team2 = this.route.snapshot.params.team2;
    this.match.getPreviousMatchesBetween2Teams(this.team1, this.team2).subscribe((response) => {
      this.data = response;
      this.firstTeam = this.data.teams[0];
      this.secondTeam = this.data.teams[1];
      console.log(this.data);
    });
  }

  resetTeamSelected(){
  }

}
