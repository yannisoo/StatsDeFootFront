import { Component, OnInit, Input } from '@angular/core';
import { Chart } from 'angular-highcharts';
import * as Highcharts from 'highcharts';

declare var require: any;
const More = require('highcharts/highcharts-more');
More(Highcharts);

const Exporting = require('highcharts/modules/exporting');
Exporting(Highcharts);

const ExportData = require('highcharts/modules/export-data');
ExportData(Highcharts);

const Accessibility = require('highcharts/modules/accessibility');
Accessibility(Highcharts);


@Component({
  selector: 'app-shots-team',
  templateUrl: './shots-team.component.html',
  styleUrls: ['./shots-team.component.scss']
})
export class ShotsTeamComponent implements OnInit {
  @Input() home;
  @Input() away;
  @Input() data;
  
  constructor() { }

  ngOnInit(): void {
    const total = parseInt(this.home.total_shots) < parseInt(this.away.total_shots) ? this.away.total_shots : this.home.total_shots
    const options: any = {
      colors: ['#043a40', '#de0909'],
      chart: {
        polar: true,
        inverted: true,
      },
      title: {
        text: ''
      },
      credits: {
        enabled: false
      },
      tooltip: {
        outside: true
      },
      pane: {
        size: '100%',
        innerSize: '30%',
        endAngle: 270
      },
      xAxis: {
        tickInterval: 1,
        lineWidth: 0,
        categories: [
          "Tirs totaux",
          "Tir cadrés",
          "Tir non cadrés",
          "Tir dans la surface",
          "Tir en dehors de la surface"
        ]
      },
      yAxis: {
        max: total,
        lineWidth: 0,
        tickInterval: 5,
        reversedStacks: false,
        endOnTick: true,
        showLastLabel: true
      },
      exporting: {
        enabled: false
      },
      series: [{
        pointWidth: 8,
        type: 'column',
        name: this.data.homeTeam.team_name,
        data: [parseInt(this.home.total_shots), parseInt(this.home.shots_on_goal), parseInt(this.home.shots_off_goal), parseInt(this.home.shots_insidebox), parseInt(this.home.shots_outsidebox)],
      }, {
        pointWidth: 8,
        type: 'column',
        name: this.data.awayTeam.team_name,
        data: [parseInt(this.away.total_shots), parseInt(this.away.shots_on_goal), parseInt(this.away.shots_off_goal), parseInt(this.away.shots_insidebox), parseInt(this.away.shots_outsidebox)],
      }]
    };
  
    Highcharts.chart('container', options);
  }

}
