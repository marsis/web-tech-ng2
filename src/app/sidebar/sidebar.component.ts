import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-sidebar',
  templateUrl: 'sidebar.component.html',
  styleUrls: ['sidebar.component.css']
})
export class SidebarComponent {
  //@Input() item: any;
  item: any;
  public data: any[];
 // account: string;
  //name: string;
  //private i: number;
 // month: number;
  //year: number;


  constructor() {
    this.data = [
      {account: '11970', name: 'Galax', multiplier: 1.265, perYear: 2.7},
      {account: '7348', name: 'Veronica', multiplier: 1.12, perYear: 2.0},
      {account: '10555', name: 'Dragonfly', multiplier: 1.023, perYear: 1.796},
      {account: '10504', name: 'Condor', multiplier: 1.04, perYear: 1.81},
      {account: '10469', name: 'Shark_007', multiplier: 1.17, perYear: 2.13},
    ];
    // this.account = this.data.account;


  }

  ngOnInit() {
  }

  /*getAccount(){
   for(let i=0; i<data.length; i++){

   }
   }*/

}
