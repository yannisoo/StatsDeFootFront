import { Component, OnInit, OnChanges, Input, Output, EventEmitter, ɵConsole } from '@angular/core';

@Component({
  selector: 'app-comparative-card',
  templateUrl: './comparative-card.component.html',
  styleUrls: ['./comparative-card.component.scss']
})
export class ComparativeCardComponent implements OnChanges {
  @Input() firstTeamSelected;
  @Input() secondTeamSelected;
  @Input() futurMatch;
  @Input() lastMatch;
  @Input() liveMatch;
  @Input() HomeLastMatch;
  @Input() AwayLastMatch;

  @Output() resetTeamSelected = new EventEmitter();
  firstTeamSelectedVictory;
  secondTeamSelectedVictory;
  draw;
  firstFutureMatch;

  constructor() { }
  ngOnChanges(): void {
    if (this.firstTeamSelected && this.secondTeamSelected) {
      const firstTeamSelectedStats = this.firstTeamSelected.statistics;
      const totalMatches = firstTeamSelectedStats.wins.total + firstTeamSelectedStats.draws.total + firstTeamSelectedStats.loses.total;
      this.firstTeamSelectedVictory = Math.round(firstTeamSelectedStats.wins.total / totalMatches * 200);
      this.draw = Math.round(firstTeamSelectedStats.draws.total / totalMatches * 200);
      this.secondTeamSelectedVictory = Math.round(firstTeamSelectedStats.loses.total / totalMatches * 200)
    }
  }
}
