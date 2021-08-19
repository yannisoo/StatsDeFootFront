import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input() fields;
  @Input() off;
  @Input() filterOn;
  @Output() function: EventEmitter<any> = new EventEmitter();
  @Output() toggle: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  activate(value){
    this.function.emit(value);
  }
  toggler(){
    this.toggle.emit();
  }
}
