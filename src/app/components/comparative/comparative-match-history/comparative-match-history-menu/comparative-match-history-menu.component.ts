import { Component, Input, OnInit,  Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-comparative-match-history-menu',
  templateUrl: './comparative-match-history-menu.component.html',
  styleUrls: ['./comparative-match-history-menu.component.scss']
})
export class ComparativeMatchHistoryMenuComponent implements OnInit {
  @Input() team;
  @Output() changeCurrentMatches = new EventEmitter();

  constructor() { }

  ngOnInit(): void {

  }

}
