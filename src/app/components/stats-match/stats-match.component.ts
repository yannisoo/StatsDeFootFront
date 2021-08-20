import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatchService } from '../../services/match.service';

@Component({
  selector: 'app-stats-match',
  templateUrl: './stats-match.component.html',
  styleUrls: ['./stats-match.component.scss']
})
export class StatsMatchComponent implements OnInit {
  matchId;
  statistics;
  data;
  teams = {
    homeLogo: '',
    homeTeam: '',
    awayTeam: '',
    awayLogo: ''
  };
  constructor(
    private route: ActivatedRoute,
    private match: MatchService
    ) { }

  ngOnInit(): void {
    this.matchId = this.route.snapshot.params.match;
    this.match.getMatch(this.matchId).subscribe((response) => {
      this.statistics = response.fixtures[0].statistics;
      this.data = response.fixtures[0];
      console.log(this.data)
      this.teams.homeLogo = response.fixtures[0].homeTeam.logo;
      this.teams.homeTeam = response.fixtures[0].homeTeam.team_name;
      this.teams.awayLogo = response.fixtures[0].awayTeam.logo;
      this.teams.awayTeam = response.fixtures[0].awayTeam.team_name;
    });
  }

}
