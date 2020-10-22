import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shots',
  templateUrl: './shots.component.html',
  styleUrls: ['./shots.component.scss']
})
export class ShotsComponent implements OnInit {
  @Input() statistique;
  homeTeam;
  awayTeam;
  constructor() { }

  ngOnInit(): void {
    console.log(this.statistique)
    this.homeTeam = {
      from: "home",
      shots_insidebox: this.checkIfExist(this.statistique['Shots insidebox'].home),
      shots_outsidebox: this.checkIfExist(this.statistique['Shots outsidebox'].home),
      shots_off_goal: this.checkIfExist(this.statistique['Shots off Goal'].home),
      shots_on_goal: this.checkIfExist(this.statistique['Shots on Goal'].home),
      blocked_shots: this.checkIfExist(this.statistique['Blocked Shots'].home),
      total_shots: this.checkIfExist(this.statistique['Total Shots'].home),
    };
    this.awayTeam = {
      from: "away",
      shots_insidebox: this.checkIfExist(this.statistique['Shots insidebox'].away),
      shots_outsidebox: this.checkIfExist(this.statistique['Shots outsidebox'].away),
      shots_off_goal: this.checkIfExist(this.statistique['Shots off Goal'].away),
      shots_on_goal: this.checkIfExist(this.statistique['Shots on Goal'].away),
      blocked_shots: this.checkIfExist(this.statistique['Blocked Shots'].away),
      total_shots: this.checkIfExist(this.statistique['Total Shots'].away),
    };

  }
  checkIfExist(res) {
    if (res) {
      return res;
    } else {
      return 0;
    }
  }

}
