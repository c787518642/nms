import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmts',
  templateUrl: './cmts.component.html',
  styleUrls: ['./cmts.component.scss']
})
export class CmtsComponent implements OnInit {
  // cmts_style='col-lg-4'
  cmts_style='col-md-12';
  show_detail=false
  constructor() { }

  ngOnInit() {
  }
  cmts_detail(){
    this.show_detail=!this.show_detail
    this.cmts_style=!this.show_detail?'col-md-12':'col-lg-4'
    console.log("detail")
  }
}
