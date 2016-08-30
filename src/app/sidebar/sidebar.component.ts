import { Component, Input, Output, EventEmitter } from '@angular/core';
//import EventEmitter = protractor.EventEmitter;

@Component({
  moduleId: module.id,
  selector: 'app-sidebar',
  templateUrl: 'sidebar.component.html',
  styleUrls: ['sidebar.component.css'],

})
export class SidebarComponent {
  @Input() data:any[];
  @Input() item: any = {};

  month: any;
  year: any;
  account: any;
  @Output() getted = new EventEmitter();

   constructor() {

  }

  ngOnInit() {
  }
  getData(item){
    //this.month = (item.multiplier);
    //this.year = (item.perYear);
    this.account = (item.account);

    //console.log(this.month);
    //console.log(this.year);
    console.log('clicked', this.account);
    this.getted.emit({item: this.item});
  }

}
