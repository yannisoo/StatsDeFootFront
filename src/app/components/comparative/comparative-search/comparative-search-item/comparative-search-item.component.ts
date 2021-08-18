import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './comparative-search-item.component.html',
  styleUrls: ['./comparative-search-item.component.scss']
})
export class ComparativeSearchItemComponent implements OnInit {
  @Input() item;
  @Input() datatype;

  @Output() newItemEvent = new EventEmitter<string>();

  itemSelected;


  constructor(
    private router: Router
  ) { }
  ngOnInit(): void {
  }

  addItemSelected(item) {
      this.newItemEvent.emit(item);
  }

  navigateToNext(datatype) {
    switch (datatype) {
      case 'country':
        this.router.navigate(['/countries/' + this.item.country + '/leagues']);
        break;
      case 'league':
        this.router.navigate(['/countries/' + this.item.country + '/' + this.item.league_id + '/teams']);
        break;
      default:
        break;
    }
  }

}
