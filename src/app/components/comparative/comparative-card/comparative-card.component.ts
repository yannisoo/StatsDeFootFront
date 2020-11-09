import { Component, OnInit, Input, Output, EventEmitter, ɵConsole } from '@angular/core';

@Component({
  selector: 'app-comparative-card',
  templateUrl: './comparative-card.component.html',
  styleUrls: ['./comparative-card.component.scss']
})
export class ComparativeCardComponent implements OnInit {
  @Input() firstTeamSelected;
  @Input() secondTeamSelected;
  @Output() resetTeamSelected = new EventEmitter();
  firstTeamSelectedVictory
  secondTeamSelectedVictory
  draw

  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(): void {
    if (this.firstTeamSelected && this.secondTeamSelected) {
      var firstTeamSelectedStats = this.firstTeamSelected.statistics
      let totalMatches = firstTeamSelectedStats.wins.total + firstTeamSelectedStats.draws.total + firstTeamSelectedStats.loses.total
      this.firstTeamSelectedVictory = Math.round(firstTeamSelectedStats.wins.total / totalMatches * 200)
      this.draw = Math.round(firstTeamSelectedStats.draws.total / totalMatches * 200)
      this.secondTeamSelectedVictory = Math.round(firstTeamSelectedStats.loses.total / totalMatches * 200)
    }
  }
}
