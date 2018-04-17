import { CmtsTableService } from './cmts-table.service';
import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators/take';


@Component({
  selector: 'tw-cmts-table',
  templateUrl: './cmts-table.component.html',
  styleUrls: ['./cmts-table.component.scss']
})
export class CmtsTableComponent implements OnInit {
  show_detail=true;

  constructor(private cmtsTableService:CmtsTableService) { }
  
  ngOnInit() {
    this.cmtsTableService.getCmtsInfo().subscribe(response =>{
       
    })
  }

  change(){
  
    this.show_detail=!this.show_detail;
  }

}
