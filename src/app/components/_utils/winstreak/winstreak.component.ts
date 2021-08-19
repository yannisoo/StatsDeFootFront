import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-winstreak',
  templateUrl: './winstreak.component.html',
  styleUrls: ['./winstreak.component.scss']
})
export class WinstreakComponent implements OnChanges {
  @Input() Matches;
  @Input() MyTeam;
  standing = [];
  constructor() { }

  ngOnChanges(): void {
    console.log(this.Matches)
    this.Matches.forEach(element => {
      let me
      let enemy
      if(this.MyTeam == element.homeTeam.team_name) {
        me = element.goalsHomeTeam
        enemy = element.goalsAwayTeam
      }else{
        enemy = element.goalsHomeTeam
        me = element.goalsAwayTeam
      }
      if(me > enemy){
          this.standing = this.standing.concat("V")
      }else if (me == enemy){
          this.standing = this.standing.concat("N")
      }else if (me < enemy){
          this.standing = this.standing.concat("D")
      }
 
    });
    this.standing = this.standing.reverse()
  }

}
