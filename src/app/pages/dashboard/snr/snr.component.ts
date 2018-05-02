import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'tw-snr',
  templateUrl: './snr.component.html',
  styleUrls: ['./snr.component.scss']
})
export class SnrComponent implements OnInit {
  show_detail1=true;
  show_detail2=false;
  
  constructor() { }

  ngOnInit() {
  }
  show1(){
    if(this.show_detail1){
      return;
    }else{
      this.show_detail1=!this.show_detail1;
      this.show_detail2=!this.show_detail2;
    }
  }
  show2(){
    if(this.show_detail2){
      return;
    }else{
      this.show_detail1=!this.show_detail1;
      this.show_detail2=!this.show_detail2;
    }
  }
  
}
