import { CmtsTableService } from './cmts-table.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators/take';


@Component({
  selector: 'tw-cmts-table',
  templateUrl: './cmts-table.component.html',
  styleUrls: ['./cmts-table.component.scss']
})
export class CmtsTableComponent implements OnInit {
  show_detail=true;
  data={
   c_ip:"10.228.0.1",
   c_name:"37_SBB_01_UBR10012",
   c_nickname:"cisco_上步北_01",
   npa_avg:0,
   c_version:"0",
   cid:10,
   cmts_lost:0,
   cmts_outtime:0,
   down_flow_max:0,
   now_down_flow:0,
   now_up_flow:0,
   pingStatus:true,
   runtime:"0",
   snmpStatus:0,
   status:true,
   up_flow_max:0
  }
  cid:any;
  constructor(
    private cmtsTableService:CmtsTableService,
    private route: ActivatedRoute
  ) { }
  
  ngOnInit() {
    this.route.queryParamMap.subscribe(data =>{
      this.cid = data.get("cid")
      this.getCmtsTableInfo({ cid: this.cid })
    })
  }

  getCmtsTableInfo(obj){
    this.cmtsTableService.getCmtsInfo(obj).subscribe(response =>{
      if(response['code']&&response['code']==1){
        let data=response['data'];
        this.data=data;
      }
      
   })
  }

  change(){
  
    this.show_detail=!this.show_detail;
  }

}
