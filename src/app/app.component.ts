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
  monthCoefficientList: any = [];
  month: any;
  year: any;
  //@Input() year: number;
  //public val: number;
  inputValue: any;




  constructor() {

  }


  getRange(input: HTMLInputElement) {
    this.inputValue = input.value;

    console.log(this.inputValue);
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
