import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-shots',
  templateUrl: './shots.component.html',
  styleUrls: ['./shots.component.scss']
})
export class ShotsComponent implements OnChanges {
  @Input() statistics;
  homeTeam;
  awayTeam;
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    this.homeTeam = {
      from: 'home',
      shots_insidebox: this.checkIfExist(this.statistics['Shots insidebox'].home),
      shots_outsidebox: this.checkIfExist(this.statistics['Shots outsidebox'].home),
      shots_off_goal: this.checkIfExist(this.statistics['Shots off Goal'].home),
      shots_on_goal: this.checkIfExist(this.statistics['Shots on Goal'].home),
      blocked_shots: this.checkIfExist(this.statistics['Blocked Shots'].home),
      total_shots: this.checkIfExist(this.statistics['Total Shots'].home),
    };
    this.awayTeam = {
      from: 'away',
      shots_insidebox: this.checkIfExist(this.statistics['Shots insidebox'].away),
      shots_outsidebox: this.checkIfExist(this.statistics['Shots outsidebox'].away),
      shots_off_goal: this.checkIfExist(this.statistics['Shots off Goal'].away),
      shots_on_goal: this.checkIfExist(this.statistics['Shots on Goal'].away),
      blocked_shots: this.checkIfExist(this.statistics['Blocked Shots'].away),
      total_shots: this.checkIfExist(this.statistics['Total Shots'].away),
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
