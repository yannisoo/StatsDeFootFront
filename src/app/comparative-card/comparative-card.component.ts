import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-comparative-card',
  templateUrl: './comparative-card.component.html',
  styleUrls: ['./comparative-card.component.scss']
})
export class ComparativeCardComponent implements OnInit {
  @Input() firstTeamSelected;
  @Input() secondTeamSelected;
  @Output() resetTeamSelected = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

}
