import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './comparative-search-item.component.html',
  styleUrls: ['./comparative-search-item.component.scss']
})
export class ComparativeSearchItemComponent implements OnInit {
  @Input() item;
  @Input() datatype;

  constructor() { }

  ngOnInit(): void {
  }

}
