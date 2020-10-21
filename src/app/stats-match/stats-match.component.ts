import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatchService } from '../services/match.service';

@Component({
  selector: 'app-stats-match',
  templateUrl: './stats-match.component.html',
  styleUrls: ['./stats-match.component.css']
})
export class StatsMatchComponent implements OnInit {
  matchId;
  statistique;
  constructor(
    private route: ActivatedRoute,
    private match: MatchService
    ) { }

  ngOnInit(): void {
    this.matchId = this.route.snapshot.params.match;

    this.match.getMatchInfos(this.matchId).subscribe((response) => {
      this.statistique = response.statistics;
    });
  }

}
