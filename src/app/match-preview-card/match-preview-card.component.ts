import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-match-preview-card',
  templateUrl: './match-preview-card.component.html',
  styleUrls: ['./match-preview-card.component.css']
})
export class MatchPreviewCardComponent implements OnInit {

  @Input() match;

  constructor() { }

  ngOnInit(): void {
  }

}
