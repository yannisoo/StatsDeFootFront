import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-matches-average',
  templateUrl: './matches-average.component.html',
  styleUrls: ['./matches-average.component.scss']
})
export class MatchesAverageComponent implements OnChanges {
  @Input() matches;
  @Input() firstTeam;
  @Input() secondTeam;
  firstTeamShotAverage;
  secondTeamShotAverage;
  constructor() { }

  ngOnChanges(): void {
    if (this.matches) {
      let firstTeamShot = 0;
      let secondTeamShot = 0;
      let matches = 0;
      this.matches.forEach(element => {
        if (element.status === 'Match Finished') {
          if (element.awayTeam.team_id === this.firstTeam.team_id) {
            firstTeamShot += element.goalsAwayTeam;
            secondTeamShot += element.goalsHomeTeam;
          } else if (element.homeTeam.team_id === this.firstTeam.team_id) {
            firstTeamShot += element.goalsHomeTeam;
            secondTeamShot += element.goalsAwayTeam;
          } else if (element.homeTeam.team_id === this.secondTeam.team_id) {
            secondTeamShot += element.goalsHomeTeam;
          } else if (element.awayTeam.team_id === this.secondTeam.team_id) {
            secondTeamShot += element.goalsAwayTeam;
          }
          matches += 1;
        }
      });
      this.firstTeamShotAverage = Math.floor(firstTeamShot / matches * 100) / 100;
      this.secondTeamShotAverage = Math.floor(secondTeamShot / matches * 100) / 100;
    }
  }
}
