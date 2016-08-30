import { Component } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';
//import { InputComponent} from './input/input.component';
@Component({

  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [SidebarComponent]
})
export class AppComponent {
  //public data: any;
  // item: any = {};

  item:any ={};

  //@Input() year: number;
  //public val: number;
  inputValue: any= 1000;
  public data: any[];



  constructor() {
    this.data = [
      {account: '11970', name: 'Galax', multiplier: 1.265, perYear: 2.7, clicked: false},
      {account: '7348', name: 'Veronica', multiplier: 1.12, perYear: 2.0, clicked: false},
      {account: '10555', name: 'Dragonfly', multiplier: 1.023, perYear: 1.796, clicked: false},
      {account: '10504', name: 'Condor', multiplier: 1.04, perYear: 1.81, clicked: false},
      {account: '10469', name: 'Shark_007', multiplier: 1.17, perYear: 2.13, clicked: false },


    ];
  }

  calculator(item){
    console.log(item.account);
  }
  getRange(input: HTMLInputElement) {
    this.inputValue = input.value;
    //this.month = this.item.multiplier;
    //console.log(this.month);
    console.log(this.inputValue);
  }

  getAccount(){
    console.log(this.item.account)
  }
  /*getMonthCoefficient(data){
    for(let i = 0; i< data.length; i++) {
        this.monthCoefficientList.push(item.multiplier);
    }
    return this.monthCoefficientList;
    console.log(this.monthCoefficientList);
}
*/
}
