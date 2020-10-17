import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-comparative-card',
  templateUrl: './comparative-card.component.html',
  styleUrls: ['./comparative-card.component.css']
})
export class ComparativeCardComponent implements OnInit {
  @Input() firstTeamSelected;
  @Input() secondTeamSelected;
  @Output() resetTeamSelected = new EventEmitter();
  @Input() resettable;

  constructor() { }

  ngOnInit(): void {
  }
  reset() {
    this.resettable = false;
    this.resetTeamSelected.emit();
  }
}
