import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-match-preview-card',
  templateUrl: './match-preview-card.component.html',
  styleUrls: ['./match-preview-card.component.scss']
})
export class MatchPreviewCardComponent implements OnInit {

  @Input() match;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  OpenAMatch(id){
    this.router.navigate(['/stats-match/' + id ]);
  }
}
