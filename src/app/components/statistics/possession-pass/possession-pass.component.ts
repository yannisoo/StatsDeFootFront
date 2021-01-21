import { Component, Input, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-possession-pass',
  templateUrl: './possession-pass.component.html',
  styleUrls: ['./possession-pass.component.scss']
})
export class PossessionPassComponent implements OnChanges {

  @Input() statistics;
  @Input() data;
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
    this.passesAccuracy();
  }
  }


passesAccuracy(){
  // Transform the data into int
  this.passesHome = parseInt(this.statistics['Ball Possession'].home.replace('%', ''), 10);
  this.passesAway = parseInt(this.statistics['Ball Possession'].away.replace('%', ''), 10);
  // Get the accurate passes' total
  const total = this.passesHome + this.passesAway;
  // Transform into pourcentage
  this.passesAway = Math.round((this.passesAway / total) * 100);
  this.passesHome = Math.round((this.passesHome / total) * 100);
}


}
