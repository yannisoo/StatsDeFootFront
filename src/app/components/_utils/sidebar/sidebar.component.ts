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
  list = false;
  first = false;
  @Output() function: EventEmitter<any> = new EventEmitter();
  @Output() toggle: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(): void {
    if(this.list == false){
    this.list = this.fields
    }
  }
  activate(value){
    this.function.emit(value);
  }
  toggler(){
    this.toggle.emit();
  }
  filter(data){
    if (data.target.value) {
      data = data.target.value;
      this.list = this.fields.filter(function (ele, i, array) {
        var arrayelement = ele.name.toLowerCase()
        return arrayelement.includes(data.toLowerCase())
      })
    }
  }
}
