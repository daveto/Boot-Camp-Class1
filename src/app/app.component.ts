import { Component } from '@angular/core';
import { Person } from './person.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Dave';
  dave: Person;
  constructor(){
    //const dave = new Person('Dave','0',27);
    //console.log(dave);
    this.dave = new Person ('Dave To','0',27);
  }
}
