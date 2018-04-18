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
  data={
   c_ip:"10.228.0.1",
   c_name:"37_SBB_01_UBR10012",
   c_nickname:"cisco_上步北_01",
   npa_avg:92.91,
   c_version:"Cisco IOS Software, 10000 Software (UBR10K4-K9P6U2-M), Version 12.2(33)SCD7, RELEASE SOFTWARE (fc2)↵Technical Support: http://www.cisco.com/techsupport↵Copyright (c) 1986-2011 by Cisco Systems, Inc.↵Compiled Mon 04-Apr-11 18:59 by prod_rel_team",
   cid:10,
   cmts_lost:0,
   cmts_outtime:15,
   down_flow_max:346.472,
   now_down_flow:59.52,
   now_up_flow:316.656,
   pingStatus:true,
   runtime:"133 days, 14:01:12.44",
   snmpStatus:1,
   status:true,
   up_flow_max:2211.144
  }
  constructor(private cmtsTableService:CmtsTableService) { }
  
  ngOnInit() {
    this.cmtsTableService.getCmtsInfo().subscribe(response =>{
       
    })
  }

  change(){
  
    this.show_detail=!this.show_detail;
  }

}
