import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {

  dateMessage: string; 
  inputText: String = "Initial value";

  constructor() { 
    setInterval(() => {
      let date = new Date();
      this.dateMessage = date.toDateString() + ' ' + date.toLocaleTimeString();
    }
    ,1000); 
  }

  ngOnInit() {
  }

  addNumbers (a: number, b: number) {
    return a+b;
  }

}
