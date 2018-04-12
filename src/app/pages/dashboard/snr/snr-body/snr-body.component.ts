import { SnrService } from './../snr.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Observable }from'rxjs/Rx';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'tw-snr-body',
  templateUrl: './snr-body.component.html',
  styleUrls: ['./snr-body.component.scss']
})
export class SnrBodyComponent implements OnInit , AfterViewInit,OnDestroy{
    options: any;
    echartsInstance: any;
    Echart_width:any;
    Gap=30;
    Padding=0;
    sub:any;
    updateOptions: any;
    constructor(private snrService:SnrService) { }
    onChartInit(e: any) {
      this.echartsInstance = e;
    }

    ngOnInit() {
        this.snrService.getSnr().subscribe(response =>{
           if(response['code']&&response['code']==1){
               let data=response['result'];
               console.log(data);
               this.options = {
                tooltip: {
                  trigger: 'item',
                //   formatter: "{a} <br/>{b}: {c} ({d}%)"
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
                           return "30-45"+"\n"+name;
                       }else if(name=="良好"){
                          return "28-30"+"\n"+name;
                       }else if(name=="一般"){
                          return "28-26"+"\n"+name;
                       }else if(name=="差"){
                          return "26-0"+"\n"+name;
                       }
                  },
                  data:['优秀','良好','一般','差'],
              
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
                          {value:data[0].snrnum, name:'优秀',itemStyle: {normal:{color: '#43d280'}}},
                          {value:data[1].snrnum, name:'良好',itemStyle: {normal:{color: '#5fc7fe'}}},
                          {value:data[2].snrnum, name:'一般',itemStyle: {normal:{color: '#fddc42'}}},
                          {value:data[3].snrnum, name:'差',itemStyle: {normal:{color: '#e64d3d'}}}
                      
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
           this.Gap=20;
           this.Padding=0;
        }else if(document.body.clientWidth<=952&&document.body.clientWidth>912){
           this.Gap=10;
           this.Padding=0;
        }else if(document.body.clientWidth<=912){
           this.Gap=5;
           this.Padding=0;
        }
       
       this.sub=Observable.fromEvent(window,'resize')
        .subscribe((event) => {
        this.Echart_width=this.echartsInstance.getWidth();
        if(this.Echart_width<=740&&this.Echart_width>351){
            this.Gap=30;
            this.Padding=0;
        }else if(this.Echart_width<=351&&this.Echart_width>322){
            this.Gap=20;
            this.Padding=0;
        }else if(this.Echart_width<=322){
            this.Gap=5;
            this.Padding=0;
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
