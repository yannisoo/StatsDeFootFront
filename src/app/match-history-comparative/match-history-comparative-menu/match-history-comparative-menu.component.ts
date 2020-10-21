import { Component, Input, OnInit,  Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-match-history-comparative-menu',
  templateUrl: './match-history-comparative-menu.component.html',
  styleUrls: ['./match-history-comparative-menu.component.scss']
})
export class MatchHistoryComparativeMenuComponent implements OnInit {
  @Input() team;
  @Output() changeCurrentMatches = new EventEmitter();

  constructor() { }

  ngOnInit(): void {

  }

}
