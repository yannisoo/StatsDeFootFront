import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-possession-pass',
  templateUrl: './possession-pass.component.html',
  styleUrls: ['./possession-pass.component.css']
})
export class PossessionPassComponent implements OnInit {

  // @Input() statistics;
  id;
  dataInfos: Array<object>  = [{}];
  dataMatch;
  chart = Array<Chart>(10);
  passesHome;
  passesAway;



  constructor(
    private  route: ActivatedRoute,
    private infoMatch: MatchService,
  ) { }

  ngOnInit(): void {
    // Value of ID
    this.id = this.route.snapshot.params.id;
    this.getData(this.id);
  }

  getData(id){
    this.infoMatch.getMatch(id).subscribe((response) => {
      this.dataMatch = response.fixtures[0];
      this.dataInfos = response.fixtures[0].statistics;
      console.log(this.dataMatch);
      this.possessionBall();
      this.passesAccuracy();
    });
  }

  possessionBall(){
    const possessionHome = this.dataInfos['Ball Possession'].home.replace('%', '');
    const possessionAway = this.dataInfos['Ball Possession'].away.replace('%', '');
    const options = this.options(true);
    const ctx = document.getElementById('possession') as HTMLCanvasElement;
    const myChart = new Chart(ctx, {
      type:  'doughnut',
      data: {
        labels : [this.dataMatch.awayTeam.team_name, this.dataMatch.homeTeam.team_name],
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
  this.passesHome = parseInt(this.dataInfos['Passes %'].home.replace('%', ''), 10);
  this.passesAway = parseInt(this.dataInfos['Passes %'].away.replace('%', ''), 10);
  const total = this.passesHome + this.passesAway;
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
