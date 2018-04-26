import { NpaService } from './npa.service';
import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'tw-npa',
  templateUrl: './npa.component.html',
  styleUrls: ['./npa.component.scss']
})
export class NpaComponent implements OnInit {
  show_detail=true;
  datas1: Array<any> = [
    { num: "低于65分", date: "0%"},
    { num: "低于75分", date: "0%"},
    { num: "低于80分", date: "0%"},
    { num: "低于85分", date: "0%"},
    { num: "低于95分", date: "0%"},
    { num: "低于100分", date: "0%"},
  
   ];
   datas2: Array<any> = [
    { num: "低于65分", date: "0%"},
    { num: "低于75分", date: "0%"},
    { num: "低于80分", date: "0%"},
    { num: "低于85分", date: "0%"},
    { num: "低于95分", date: "0%"},
    { num: "低于100分", date: "0%"},
  
   ];
   
  constructor(private npaService:NpaService) { }

  ngOnInit() {
    this.npaService.getStatistical().subscribe(response =>{
       if(response['code']&&response['code']==1){
         let data1=response['data'];
         if(data1){
          this.datas1=[
            { num: "低于65分", date: data1[0].p65},
            { num: "低于75分", date: data1[0].p75},
            // { num: "低于80分", date: data1[0].p80},
            { num: "低于85分", date: data1[0].p85},
            { num: "低于95分", date: data1[0].p95},
            { num: "低于100分", date: data1[0].p100},
           ];
           this.datas2=[
            { num: "低于65分", date: data1[0].fs65},
            { num: "低于75分", date: data1[0].fs75},
            // { num: "低于80分", date: data1[0].fs80},
            { num: "低于85分", date: data1[0].fs85},
            { num: "低于95分", date: data1[0].fs95},
            { num: "低于100分", date:data1[0].fs100},
          
           ];
         }
         

       }
    })
  }
  show(){
    this.show_detail=!this.show_detail;

   }
 
   

}
