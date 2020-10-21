import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-fouls',
  templateUrl: './fouls.component.html',
  styleUrls: ['./fouls.component.scss']
})
export class FoulsComponent implements OnChanges {
  @Input() statistique;
  homeTeam;
  awayTeam;

  constructor() { }

  ngOnChanges(): void {
    this.homeTeam = {
      fouls: this.checkIfExist(this.statistique.Fouls.home),
      yellow_card: this.checkIfExist(this.statistique['Yellow Cards'].home),
      red_card: this.checkIfExist(this.statistique['Red Cards'].home),
      offside: this.checkIfExist(this.statistique.Offsides.home),
    };
    this.awayTeam = {
      fouls: this.checkIfExist(this.statistique.Fouls.away),
      yellow_card: this.checkIfExist(this.statistique['Yellow Cards'].away),
      red_card: this.checkIfExist(this.statistique['Red Cards'].away),
      offside: this.checkIfExist(this.statistique.Offsides.away)
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
