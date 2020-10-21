import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fouls-team',
  templateUrl: './fouls-team.component.html',
  styleUrls: ['./fouls-team.component.css']
})
export class FoulsTeamComponent implements OnInit {
  @Input() team;
  constructor() { }

  ngOnInit(): void {
  }

}
