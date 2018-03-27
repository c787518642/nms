import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators/take';

@Component({
  selector: 'tw-cmts-table',
  templateUrl: './cmts-table.component.html',
  styleUrls: ['./cmts-table.component.scss']
})
export class CmtsTableComponent implements OnInit {
  show_detail=true;

  constructor() { }
  
  ngOnInit() {
  }

  change(){
  
    this.show_detail=!this.show_detail;
  }

}
