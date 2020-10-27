import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-match-card',
  templateUrl: './home-match-card.component.html',
  styleUrls: ['./home-match-card.component.scss']
})
export class HomeMatchCardComponent implements OnInit {

  @Input() match;

  constructor() { }

  ngOnInit(): void {
  }

}
