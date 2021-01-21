import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-pourcentage-pass',
  templateUrl: './pourcentage-pass.component.html',
  styleUrls: ['./pourcentage-pass.component.scss']
})
export class PourcentagePassComponent implements OnInit {
  @Input() statistics;
  @Input() data;
  chart = Array<Chart>(10);
  passesHome;
  passesAway;
  PossessionPassComponent = 'PossessionPassComponent';

  constructor(
    private  route: ActivatedRoute,
    private infoMatch: MatchService,
   ) { }

  ngOnInit(): void {
    if (this.statistics && this.data){
      this.possessionBall();
    }
  }

  possessionBall(){
    // Transform  the data in usable data for chart
    const possessionHome = this.statistics['Passes %'].home.replace('%', '');
    const possessionAway = this.statistics['Passes %'].away.replace('%', '');
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
