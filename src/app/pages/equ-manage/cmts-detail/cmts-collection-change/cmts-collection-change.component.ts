import { CmtsCollettionService } from './cmts-collettion.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'tw-cmts-collection-change',
  templateUrl: './cmts-collection-change.component.html',
  styleUrls: ['./cmts-collection-change.component.scss']
})
export class CmtsCollectionChangeComponent implements OnInit {
  data=[
    {off_on: "Collect ON", c_nickname: "cisco_上步北_01", time: "2017-01-04 02:12:40", cid: 10},
    {off_on: "0", c_nickname: "0", time: "0", cid: 0}
  ]
  length:any;
  cid:any;
  collection_data={off_on: "0", c_nickname: "0", time: "0", cid: 0};
  
  constructor(
    private cmtsCollettionService:CmtsCollettionService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.queryParamMap.subscribe(data =>{
      this.cid = data.get("cid")
      this.getCmtsCollection({ cid: this.cid })
    })
     
  }

  getCmtsCollection(obj){
      this.cmtsCollettionService.getCmtsCollection(obj).subscribe(response =>{
        if(response['code']&&response['code']==1){
          if(response['data']&&response['data'].length>0){
            this.data=response['data'];

            this.length=this.data.length-1;
            this.collection_data=this.data[this.length];

          }
        }
    })
  }

}
