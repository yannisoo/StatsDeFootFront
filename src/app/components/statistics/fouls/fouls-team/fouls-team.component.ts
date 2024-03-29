import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-fouls-team',
  templateUrl: './fouls-team.component.html',
  styleUrls: ['./fouls-team.component.scss']
})
export class FoulsTeamComponent implements OnChanges {
  @Input() team;
  array;
  foulSize
  yellow_cardSize
  red_cardSize
  offsideSize

  constructor() { }

  ngOnChanges(): void {
    this.foulSize = 15 + (this.team.fouls * 1.9)
    this.yellow_cardSize = 15 + (this.team.yellow_card * 5)
    this.red_cardSize = 15 + (this.team.red_card * 15)
    this.offsideSize = 15 + (this.team.offside * 4)
  }
  
}
