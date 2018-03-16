import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'tw-snr',
  templateUrl: './snr.component.html',
  styleUrls: ['./snr.component.scss']
})
export class SnrComponent implements OnInit {
  show_detail=true;
 
  
  constructor() { }

  ngOnInit() {
  }
  show(){
    this.show_detail=!this.show_detail;

   }
  
}
