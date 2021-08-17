import { Component, Input, OnInit,  Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-comparative-match-history-menu',
  templateUrl: './comparative-match-history-menu.component.html',
  styleUrls: ['./comparative-match-history-menu.component.scss']
})
export class ComparativeMatchHistoryMenuComponent implements OnInit {
  @Input() team;
  @Output() changeCurrentMatches = new EventEmitter();
  team_1_selected = 0;
  common_selected = 1;
  team_2_selected = 0;
  constructor() { }

  ngOnInit(): void {

  }
  select(id) {
    this.team_1_selected = 0
    this.common_selected = 0
    this.team_2_selected = 0

    switch (id) {
      case 1:
        this.team_1_selected = 1
        break;
      case 2:
        this.common_selected = 1
        break;
      case 3:
        this.team_2_selected = 1
        break;
      default:
        break;
    }
  }
}
