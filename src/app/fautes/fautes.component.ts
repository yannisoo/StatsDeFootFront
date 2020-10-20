import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatchService } from '../services/match.service';

@Component({
  selector: 'app-fautes',
  templateUrl: './fautes.component.html',
  styleUrls: ['./fautes.component.css']
})
export class FautesComponent implements OnInit {
  match;
  homeTeam;
  awayTeam;

  constructor(
    private route: ActivatedRoute,
    private MatchService: MatchService
  ) { }

  ngOnInit(): void {
    this.match = this.route.snapshot.params.match

    this.MatchService.getMatchInfos(this.match).subscribe((response) => {
      response = response.statistics;
      this.homeTeam = {
        'fouls': this.checkIfExist(response['Fouls'].home),
        'yellow_card': this.checkIfExist(response['Yellow Cards'].home),
        'red_card': this.checkIfExist(response['Red Cards'].home),
        'offside': this.checkIfExist(response['Offsides'].home),
      }
      this.awayTeam = {
        'fouls': this.checkIfExist(response['Fouls'].away),
        'yellow_card': this.checkIfExist(response['Yellow Cards'].away),
        'red_card': this.checkIfExist(response['Red Cards'].away),
        'offside': this.checkIfExist(response['Offsides'].away)
      }
    })
  }
  checkIfExist(res) {
    if (res) {
      return res;
    } else {
      return 0;
    }
  }
}
