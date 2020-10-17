import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'StatsDeFootFront';
  firstTeamSelected
  secondTeamSelected
  resettable

  constructor() { }

  ngOnInit() { }

  keepTeam(team) {
    this.resettable = true
    if (this.firstTeamSelected) {
      this.secondTeamSelected = team
    } else {
      this.firstTeamSelected = team
    }
  }
  resetTeamSelected() {
    this.firstTeamSelected = null
    this.secondTeamSelected = null
    this.resettable = false
  }
}
