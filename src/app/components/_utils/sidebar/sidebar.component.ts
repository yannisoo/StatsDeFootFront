import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input() fields;
  @Output() function: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  activate(value){
    this.function.emit(value);
  }
}
