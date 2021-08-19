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
  save
  first = false;
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
  filter(data){
    if(this.first == false){
      this.save = this.fields;
      this.first = true
    }else{
      this.fields = this.save;
    }
    if (data.target.value) {
      data = data.target.value;
      this.fields = this.fields.filter(function (ele, i, array) {
        var arrayelement = ele.name.toLowerCase()
        return arrayelement.includes(data.toLowerCase())
      })
    }
  }
}
