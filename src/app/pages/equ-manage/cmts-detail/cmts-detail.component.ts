
import { DetailNumService } from './detail-num.service';
import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'cmts-detail',
  templateUrl: './cmts-detail.component.html',
  styleUrls: ['./cmts-detail.component.scss']
})
export class CmtsDetailComponent implements OnInit {
  title="cmts";
  data={
    cm_dow_rate:0,
    cm_online:0,
    cm_up_rate:0,
    cmts_dow_sum:0,
    cmts_eth_sum:0,
    cmts_up_sum:0,
    cpu_r:0,
    mem_r:0,
  }
  @Input() cid:any;
  constructor(
    private detailNumService:DetailNumService,
    private route: ActivatedRoute
  ) { }
  ngOnChanges(){
    this.getDetailNum({ cid: this.cid })
  }
  ngOnInit() {
    this.route.url.subscribe(data=>{
      this.title=data[0].path;
    })
  
  }

  getDetailNum(obj){
    this.detailNumService.getCmtsInfoNum(obj).subscribe(response =>{
      if(response['code']&&response['code']==1){
         this.data=response['data'];
         
      }
  })  
  }
 
}
