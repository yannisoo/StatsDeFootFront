import { Component, Input, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-possession-pass',
  templateUrl: './possession-pass.component.html',
  styleUrls: ['./possession-pass.component.scss']
})
export class PossessionPassComponent implements OnChanges {

  @Input() statistics;
  @Input() data;
  chart = Array<Chart>(10);
  passesHome;
  passesAway;



  constructor(
    private  route: ActivatedRoute,
    private infoMatch: MatchService,
  ) { }

  ngOnChanges(): void {
    // Verify that we have the data
    if (this.statistics && this.data){
    // Stats Creation when we get Data from parent
    this.possessionBall();
    this.passesAccuracy();
  }
  }


  possessionBall(){
      // Transform  the data in usable data for chart
      const possessionHome = this.statistics['Ball Possession'].home.replace('%', '');
      const possessionAway = this.statistics['Ball Possession'].away.replace('%', '');
      // Chart creation
      const options = this.options(true);
      const ctx = document.getElementById('possession') as HTMLCanvasElement;
      const myChart = new Chart(ctx, {
        type:  'doughnut',
        data: {
          labels : [this.data.awayTeam.team_name, this.data.homeTeam.team_name],
          datasets: [{
            data: [possessionAway, possessionHome],
            backgroundColor: [
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
          ],
          borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)'
          ],
          borderWidth: 1
          }]
        },
        options,
      });

  }

passesAccuracy(){
  // Transform the data into int
  this.passesHome = parseInt(this.statistics['Passes %'].home.replace('%', ''), 10);
  this.passesAway = parseInt(this.statistics['Passes %'].away.replace('%', ''), 10);
  // Get the accurate passes' total
  const total = this.passesHome + this.passesAway;
  // Transform into pourcentage
  this.passesAway = Math.round((this.passesAway / total) * 100);
  this.passesHome = Math.round((this.passesHome / total) * 100);
}


  options(legend?: boolean) {
    return {
        elements: {
            line: {
                tension: 0,
            },
        },
        legend: {
            display: false,
            position: 'right',
        },
        responsive: true,
        maintainAspectRatio: false,
    };
}

}
