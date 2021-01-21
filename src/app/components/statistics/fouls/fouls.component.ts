import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-fouls',
  templateUrl: './fouls.component.html',
  styleUrls: ['./fouls.component.scss']
})
export class FoulsComponent implements OnChanges {
  @Input() statistics;
  homeTeam;
  awayTeam;

  constructor() { }

  ngOnChanges(): void {
    if (this.statistics){
      this.homeTeam = {
        fouls: this.checkIfExist(this.statistics.Fouls.home),
        yellow_card: this.checkIfExist(this.statistics['Yellow Cards'].home),
        red_card: this.checkIfExist(this.statistics['Red Cards'].home),
        offside: this.checkIfExist(this.statistics.Offsides.home),
      };
      this.awayTeam = {
        fouls: this.checkIfExist(this.statistics.Fouls.away),
        yellow_card: this.checkIfExist(this.statistics['Yellow Cards'].away),
        red_card: this.checkIfExist(this.statistics['Red Cards'].away),
        offside: this.checkIfExist(this.statistics.Offsides.away)
      };
    }
  }

  checkIfExist(res) {
    if (res) {
      return res;
    } else {
      return 0;
    }
  }

}
