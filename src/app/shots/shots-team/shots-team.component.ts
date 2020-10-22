import { Component, OnInit, Input } from '@angular/core';
import Chart from 'chart.js';
@Component({
  selector: 'app-shots-team',
  templateUrl: './shots-team.component.html',
  styleUrls: ['./shots-team.component.scss']
})
export class ShotsTeamComponent implements OnInit {
  @Input() team;

  constructor() { }

  ngOnInit(): void {
    console.log(this.team)

    // TODO : set un id dynamic direcement dans l'html

    const element = document.getElementById('chart')
    element.setAttribute('id', 'chart-' + this.team.from)

    const ctx = document.getElementById('chart-' + this.team.from)

    const myChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ["Tir cadré", "Tir non cadré", "Tir bloqué"],
        datasets: [{
          data: [
            this.team.shots_on_goal,
            this.team.shots_off_goal,
            this.team.blocked_shots,
          ],
          backgroundColor: [
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(128, 71, 14, 0.6)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(128, 71, 14, 1)',
          ],
          borderWidth: 1
        }]
      },
    });
  }

}
