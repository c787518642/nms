import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tw-npa',
  templateUrl: './npa.component.html',
  styleUrls: ['./npa.component.scss']
})
export class NpaComponent implements OnInit {
  show_detail=true;
  constructor() { }

  ngOnInit() {
  }
  show(){
    this.show_detail=!this.show_detail;

   }
  datas1: Array<any> = [
    { num: "低于65分", date: "2.43%"},
    { num: "低于75分", date: "4.88%"},
    { num: "低于85分", date: "8.11%"},
    { num: "低于95分", date: "26.16%"},
    { num: "低于100分", date: "100%"},
  
   ];
   datas2: Array<any> = [
    { num: "低于65分", date: "7.23%"},
    { num: "低于75分", date: "8.43%"},
    { num: "低于85分", date: "9.64%"},
    { num: "低于95分", date: "20.48%"},
    { num: "低于100分", date: "100%"},
  
   ];
   
   

}
