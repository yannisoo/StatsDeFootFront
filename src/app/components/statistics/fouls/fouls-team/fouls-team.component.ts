import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-fouls-team',
  templateUrl: './fouls-team.component.html',
  styleUrls: ['./fouls-team.component.scss']
})
export class FoulsTeamComponent implements OnChanges {
  @Input() team;
  array;

  constructor() { }

  ngOnChanges(): void {
    this.array = new Array(this.team.yellow_card);
  }

}
