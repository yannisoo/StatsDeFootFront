import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-matches-average',
  templateUrl: './matches-average.component.html',
  styleUrls: ['./matches-average.component.scss']
})
export class MatchesAverageComponent implements OnChanges {
  @Input() matches;
  constructor() { }

  ngOnChanges(): void {
    if (this.matches) {

    }
  }
}
