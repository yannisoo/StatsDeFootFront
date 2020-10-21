import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatchService } from '../services/match.service';

@Component({
  selector: 'app-fouls',
  templateUrl: './fouls.component.html',
  styleUrls: ['./fouls.component.css']
})
export class FoulsComponent implements OnInit {
  matchId;
  homeTeam;
  awayTeam;

  constructor(
    private route: ActivatedRoute,
    private match: MatchService
  ) { }

  ngOnInit(): void {
    this.matchId = this.route.snapshot.params.match;

    this.match.getMatchInfos(this.matchId).subscribe((response) => {
      response = response.statistics;
      this.homeTeam = {
        fouls: this.checkIfExist(response.Fouls.home),
        yellow_card: this.checkIfExist(response['Yellow Cards'].home),
        red_card: this.checkIfExist(response['Red Cards'].home),
        offside: this.checkIfExist(response.Offsides.home),
      };
      this.awayTeam = {
        fouls: this.checkIfExist(response.Fouls.away),
        yellow_card: this.checkIfExist(response['Yellow Cards'].away),
        red_card: this.checkIfExist(response['Red Cards'].away),
        offside: this.checkIfExist(response.Offsides.away)
      };
    });
  }
  checkIfExist(res) {
    if (res) {
      return res;
    } else {
      return 0;
    }
  }
}
