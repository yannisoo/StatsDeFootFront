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
  possessionHome;
  possessionAway;

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
    this.possessionHome = Math.round((this.statistics['Passes accurate'].home/this.statistics['Total passes'].home)*100).toFixed(1);
    this.possessionAway = Math.round((this.statistics['Passes accurate'].away/this.statistics['Total passes'].away)*100).toFixed(1);
    // Transform  the data in usable data for chart
    const possessionHome = this.statistics['Passes %'].home.replace('%', '');
    const possessionAway = this.statistics['Passes %'].away.replace('%', '');

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
