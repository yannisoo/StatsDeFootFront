import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-info',
  templateUrl: './team-info.component.html',
  styleUrls: ['./team-info.component.css']
})
export class TeamInfoComponent implements OnInit {

  @Input() team;

  constructor() { }

  ngOnInit(): void {
    this.adaptableContent();
  }

  // function to adapt displayed content to any form of given data
  adaptableContent(){
    if (this.team.team_logo) {
      this.team.logo = this.team.team_logo;
    }
    if (this.team.team_name) {
      this.team.name = this.team.team_name;
    }
  }

}
