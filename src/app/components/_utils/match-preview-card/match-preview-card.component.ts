import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-match-preview-card',
  templateUrl: './match-preview-card.component.html',
  styleUrls: ['./match-preview-card.component.scss']
})
export class MatchPreviewCardComponent implements OnInit {

  @Input() match;
  @Input() componentParent;
  @Input() pastMatches;
  component = 'MatchPreviewCardComponent';
  formatedDate;
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    var date = new Date(this.match.event_timestamp * 1000);
    this.formatedDate = date.getDay() + ' / ' + date.getMonth() + ' / ' + date.getFullYear();
  }
  OpenAMatch(id){
    this.router.navigate(['/stats-match/' + id ]);
  }
}
