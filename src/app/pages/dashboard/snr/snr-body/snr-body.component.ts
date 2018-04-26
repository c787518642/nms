import { SnrService } from './../snr.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Observable }from'rxjs/Rx';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { environment } from '../../../../../environments/environment';

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
    
        if(document.body.clientWidth<=1336&&document.body.clientWidth>1257){
            this.Gap=20;
            this.Padding=0;
        }else if(document.body.clientWidth<=1257&&document.body.clientWidth>952){
           this.Gap=20;
           this.Padding=0;
        }else if(document.body.clientWidth<=952&&document.body.clientWidth>912){
           this.Gap=10;
           this.Padding=0;
        }else if(document.body.clientWidth<=912&&document.body.clientWidth>400){
           this.Gap=5;
           this.Padding=0;
        }else if(document.body.clientWidth<=400){
            this.Gap=20;
            this.Padding=0;
         }
    
       this.sub=Observable.fromEvent(window,'resize')
        .subscribe((event) => {
        this.Echart_width=this.echartsInstance.getWidth();
        console.log(this.Echart_width)
        if(this.Echart_width<=1000&&this.Echart_width>740){
            this.Gap=30;
            this.Padding=0;
        }else if(this.Echart_width<=740&&this.Echart_width>351){
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
    this.snrService.getSnr().subscribe(response =>{
        if(response['code']&&response['code']==1){
            let data=response['result'];
            if(data){
                //更新图表
                this.updateOptions = {
                    series:[{
                        data:[
                            {value:data[0].pie, name:'优质',itemStyle: {normal:{color: '#43d280'}}},
                            {value:data[1].pie, name:'良好',itemStyle: {normal:{color: '#5fc7fe'}}},
                            {value:data[2].pie, name:'一般',itemStyle: {normal:{color: '#fddc42'}}},
                            {value:data[3].pie, name:'差',itemStyle: {normal:{color: '#e64d3d'}}}
                        ]
                    }]
                };
             
            }
        }
     })

     this.options = {
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b}: {c}%"
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
               if(name=="优质"){
                   return "30-45"+"\n"+name;
               }else if(name=="良好"){
                  return "28-30"+"\n"+name;
               }else if(name=="一般"){
                  return "28-26"+"\n"+name;
               }else if(name=="差"){
                  return "26-0"+"\n"+name;
               }
          },
          data:['优质','良好','一般','差'],
      
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
                  {value:0, name:'优质',itemStyle: {normal:{color: '#43d280'}}},
                  {value:0, name:'良好',itemStyle: {normal:{color: '#5fc7fe'}}},
                  {value:0, name:'一般',itemStyle: {normal:{color: '#fddc42'}}},
                  {value:0, name:'差',itemStyle: {normal:{color: '#e64d3d'}}}
              ]
          }
        ]
      };
  }

    
  ngOnDestroy(){
    this.sub.unsubscribe();
  }  
  

}
