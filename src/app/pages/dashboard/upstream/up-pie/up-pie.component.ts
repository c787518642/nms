import { UpstreamService } from './../upstream.service';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Observable }from'rxjs/Rx';

@Component({
  selector: 'tw-up-pie',
  templateUrl: './up-pie.component.html',
  styleUrls: ['./up-pie.component.scss']
})
export class UpPieComponent implements OnInit,AfterViewInit,OnDestroy {
  options: any;
  echartsInstance: any;
  Echart_width:any;
  Gap=30;
  Padding=0;
  sub:any;
  updateOptions: any;
  constructor(private upstreamService:UpstreamService) { }
  onChartInit(e: any) {
    this.echartsInstance = e;
   
  }
 
 
  
  
 
   
   
  ngOnInit() {
    this.upstreamService.getUpPie().subscribe(response =>{
        if(response['code']&&response['code']==1){
            let data=response['data'];
            let value1=data.cmHisPieChart[0].cmnum;
            let value2=data.cmHisPieChart[1].cmnum+data.cmHisPieChart[2].cmnum;
            let value3=data.cmHisPieChart[3].cmnum+data.cmHisPieChart[4].cmnum;
            let value4=data.cmHisPieChart[5].cmnum+data.cmHisPieChart[6].cmnum;
            let value5=data.cmHisPieChart[7].cmnum+data.cmHisPieChart[8].cmnum;
            
            this.options = {
    
                tooltip: {
                  trigger: 'item',
                  formatter: "{a} <br/>{b}: {c} ({d}%)"
              },
          
              legend: {
                  x : 'center',
                  y : 'bottom',
          
                  itemWidth:5,
                  itemHeight:50,
                  itemGap:this.Gap,
                  padding:[0,0],
                  textStyle:{
                      fontSize:20,
                  },
                  formatter:function(name){
                       if(name=="优秀"){
                           return "30-45"+"\n"+name;
                       }else if(name=="良好"){
                          return "28-30"+"\n"+name;
                       }else if(name=="一般"){
                          return "28-26"+"\n"+name;
                       }else if(name=="较差"){
                          return "26-10"+"\n"+name;
                       }else if(name=="差"){
                          return "10-0"+"\n"+name;
                       }
                  },
                  data:['优秀','良好','一般','较差','差'],
              
              },
              series: [
                  {
                      name:'SNR',
                      type:'pie',
                      radius: ['40%', '65%'],
                      center : ['50%', '40%'],
                      avoidLabelOverlap: false,
                      label: {
                          normal: {
                              show: false,
                              position: 'center'
                          },
                          emphasis: {
                              show: true,
                              textStyle: {
                                  fontSize: '30',
                                  fontWeight: 'bold'
                              }
                          }
                      },
                      labelLine: {
                          normal: {
                              show: false
                          }
                      },
                      data:[
                          {value:value1, name:'优秀',itemStyle: {normal:{color: '#43d280'}}},
                          {value:value2, name:'良好',itemStyle: {normal:{color: '#5fc7fe'}}},
                          {value:value3, name:'一般',itemStyle: {normal:{color: '#fddc42'}}},
                          {value:value4, name:'较差',itemStyle: {normal:{color: '#f39c11'}}},
                          {value:value5, name:'差',itemStyle: {normal:{color: '#e64d3d'}}}
                      
                      ]
                  }
                ]
              };
        }
    })
      
    if(document.body.clientWidth<=1336&&document.body.clientWidth>1257){
        this.Gap=20;
        this.Padding=0;
    }else if(document.body.clientWidth<=1257&&document.body.clientWidth>952){
       this.Gap=10;
       this.Padding=0;
    }else if(document.body.clientWidth<=952&&document.body.clientWidth>912){
       this.Gap=5;
       this.Padding=0;
    }else if(document.body.clientWidth<=912){
       this.Gap=0;
       this.Padding=30;
    }
    this.sub=Observable.fromEvent(window,'resize')
    .subscribe((event) => {
    this.Echart_width=this.echartsInstance.getWidth();
    if(this.Echart_width<=740&&this.Echart_width>450){
        this.Gap=30;
        this.Padding=0;
    }else if(this.Echart_width<=450&&this.Echart_width>407){
        this.Gap=20;
        this.Padding=0;
    }else if(this.Echart_width<=407&&this.Echart_width>368){
        this.Gap=5;
        this.Padding=0;
    }else if(this.Echart_width<=368&&this.Echart_width>348){
        this.Gap=0;
        this.Padding=0;
    }else if(this.Echart_width<=311){
        this.Gap=3;
        this.Padding=30;
    }
   
     //更新图表
     this.updateOptions = {
        legend:{
            itemGap:this.Gap,
            padding:[0,this.Padding=0]
        }
      };
        
    });
  }
  
  ngAfterViewInit(){
 
    
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }  
}
