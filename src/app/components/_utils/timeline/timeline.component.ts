import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnChanges {
  
  @Input() events;
  @Input() teams;
  indexed;

  constructor() { }

  ngOnChanges(): void {
    this.events.forEach(element => {
      element.position = (element.elapsed / 90) * 71;
      element.position = element.position + 14.5;
      console.log(element.teamName)
      console.log(this.teams)
      console.log(element.teamName == this.teams.homeTeam)

    });
  }
  ninja(index){ 
    index = index +1
    document.getElementById(index).style.display = 'flex';
    if(this.indexed && this.indexed != index){
      document.getElementById(this.indexed).style.display = 'none';
    }
    this.indexed = index;

  }

}
