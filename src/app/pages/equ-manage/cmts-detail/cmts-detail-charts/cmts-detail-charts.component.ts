import { Component, OnInit, Optional } from '@angular/core';
import { take } from 'rxjs/operators/take';
import { Router, ActivatedRoute } from '@angular/router';
import { DetailChartsService } from './detail-charts.service';
@Component({
  selector: 'tw-cmts-detail-charts',
  templateUrl: './cmts-detail-charts.component.html',
  styleUrls: ['./cmts-detail-charts.component.scss']
})
export class CmtsDetailChartsComponent implements OnInit {
  show_detail=[true,false,false,false,false,false,false];
  selectedKey:any;
  CONTENT="Ping丢包率";
  data_length=[
    { content: '显示最近一天' },
    { content: '显示最近一周' },
    { content: '显示最近一月' },
    { content: '显示最近三月' },
  ];
  DateConetent="显示最近一天";
  data=[
    {index:0, content: 'Ping丢包率',class:"selected"},
    {index:1, content: 'Ping延时',class:"normal"},
    {index:2, content: '内存' ,class:"normal"},
    {index:3,content: '温度' ,class:"normal"},
    {index:4, content: 'CM在线数' ,class:"normal"},
    {index:5, content: '流量' ,class:"normal"},
    {index:6, content: 'NPA',class:"normal"},

  ];
  data1: any;
  data2: any;
  data3: any;
  data4: any;
  data5: any;
  data6: any;
  data7: any;
  cid:any;
  constructor(
    private detailChartsService:DetailChartsService,
    private route: ActivatedRoute
  ) { }
  show(key){
    this.data[0].class="normal";
    this.selectedKey=key;
    for(let i=0;i<this.show_detail.length;i++){
        this.show_detail[i]=false;
    }
    this.show_detail[key.index]=true;  
   }
   show2(key){
     this.CONTENT=key.content;
    for(let i=0;i<this.show_detail.length;i++){
        this.show_detail[i]=false;
    }
    this.show_detail[key.index]=true;  
   }
   get_line(conetent){
    this.DateConetent=conetent;
    if(this.DateConetent=="显示最近一天"){
      this.getChartData({ cid: this.cid,day_len:1 })
    }else if(this.DateConetent=="显示最近一周"){
      this.getChartData({ cid: this.cid,day_len:7 })
    }else if(this.DateConetent=="显示最近一月"){
      this.getChartData({ cid: this.cid,day_len:30 })
    }else if(this.DateConetent=="显示最近三月"){
      this.getChartData({ cid: this.cid,day_len:90 })
    }
  }
  ngOnInit() {
   
      this.cid =  this.route.snapshot.queryParamMap.get("cid")
      if(this.cid){
        this.getChartData({ cid: this.cid,day_len:1 })
      }
      
   
  }
  getChartData(obj){
    this.detailChartsService.getCmtsPingChart(obj).subscribe(response =>{
      if(response['code']&&response['code']==1){
          if(response['data']){
               this.data1=response['data'];
          }
         
      }
    })
    this.detailChartsService.getCmtsMemChart(obj).subscribe(response =>{
      if(response['code']&&response['code']==1){
          if(response['data']){
               this.data2=response['data'];
              
          }
      }
    })
    this.detailChartsService.getCmtsTemp(obj).subscribe(response =>{
      if(response['code']&&response['code']==1){
          if(response['data']){
               this.data3=response['data'];   
          }
      }
    })
    this.detailChartsService.getCmtsCmOnline(obj).subscribe(response =>{
      if(response['code']&&response['code']==1){
          if(response['data']){
               this.data4=response['data'];
          }
      }
    })
    this.detailChartsService.getCmtsFlow(obj).subscribe(response =>{
      if(response['code']&&response['code']==1){
          if(response['data']){
               this.data5=response['data'];
          }
      }
    })
    this.detailChartsService.getCmtsNpa(obj).subscribe(response =>{
      if(response['code']&&response['code']==1){
          if(response['data']){
               this.data6=response['data'];
          }
      }
    })

  }

}
