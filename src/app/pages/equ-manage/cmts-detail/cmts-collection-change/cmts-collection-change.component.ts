import { CmtsCollettionService } from './cmts-collettion.service';
import { Component, OnInit } from '@angular/core';


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
  collection_data={off_on: "0", c_nickname: "0", time: "0", cid: 0};
  
  constructor(private cmtsCollettionService:CmtsCollettionService) { }

  ngOnInit() {
   
     this.cmtsCollettionService.getCmtsCollection().subscribe(response =>{
        if(response['code']&&response['code']==1){
          if(response['data']){
            this.data=response['data'];
            this.length=this.data.length-1;
            this.collection_data=this.data[this.length];

          }
        }
     })
  }

}
