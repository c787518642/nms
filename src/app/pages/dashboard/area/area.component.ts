import { AreaService } from './area.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Observable }from'rxjs/Rx';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';


@Component({
  selector: 'tw-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit,AfterViewInit,OnDestroy {
  
  options: any;
  npa1=0;
  npa2=0;
  npa3=0;
  npa4=0;
  npa5=0;
  echartsInstance: any;
  Echart_width:any;
  Gap=30;
  Padding=0;
  sub:any;
  updateOptions: any;
  constructor(
    private areaService:AreaService
  ) { }
  onChartInit(e: any) {
    this.echartsInstance = e;
  }
 

  ngOnInit() {
    this.areaService.getNpavalues().subscribe(response => {
        if(response['code']&&response['code']==1){
            let data=response['data'];
            this.npa1=data.npa1;
            this.npa2=data.npa2;
            this.npa3=data.npa3;
            this.npa4=data.npa4;
            this.npa5=data.npa5;

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
                  textStyle:{
                      fontSize:20,
                  },
                  formatter:function(name){
                       if(name=="优秀"){
                           return "95-100"+"\n"+name;
                       }else if(name=="良好"){
                          return "85-95"+"\n"+name;
                       }else if(name=="一般"){
                          return "70-85"+"\n"+name;
                       }else if(name=="较差"){
                          return "60-70"+"\n"+name;
                       }else if(name=="差"){
                        return "低于60"+"\n"+name;
                     }
                  },
                  data:['优秀','良好','一般','较差','差'],
              
              },
              series: [
                  {
                      name:'SNR',
                      type:'pie',
                      radius: ['40%', '65%'],
                      center : ['50%', '45%'],
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
                          {value:this.npa5, name:'优秀',itemStyle: {normal:{color: '#43d280'}}},
                          {value:this.npa4, name:'良好',itemStyle: {normal:{color: '#5fc7fe'}}},
                          {value:this.npa3, name:'一般',itemStyle: {normal:{color: '#fddc42'}}},
                          {value:this.npa2, name:'较差',itemStyle: {normal:{color: '#f39c11'}}},
                          {value:this.npa1, name:'差',itemStyle: {normal:{color: '#e64d3d'}}}
          
                      
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
       this.Padding=0;
    }
    this.sub=Observable.fromEvent(window,'resize')
    .subscribe((event) => {
    this.Echart_width=this.echartsInstance.getWidth();
    if(this.Echart_width<=740&&this.Echart_width>468){
        this.Gap=30;
        this.Padding=0;
    }else if(this.Echart_width<=468&&this.Echart_width>429){
        this.Gap=20;
        this.Padding=0;
    }else if(this.Echart_width<=429&&this.Echart_width>368){
        this.Gap=5;
        this.Padding=0;
    }else if(this.Echart_width<=368&&this.Echart_width>350){
        this.Gap=0;
        this.Padding=0;
    }else if(this.Echart_width<=350){
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

  ngAfterViewInit(){}

  ngOnDestroy(){
    this.sub.unsubscribe();
  } 

}
