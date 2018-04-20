import { Component, OnInit,AfterViewInit, Input} from '@angular/core';
import { Observable }from'rxjs/Rx';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { DetailNumService } from '../detail-num.service';
declare var echarts;
@Component({
  selector: 'app-water-chart',
  templateUrl: './water-chart.component.html',
  styleUrls: ['./water-chart.component.scss']
})
export class WaterChartComponent implements OnInit,AfterViewInit {
 
  options1: any;
  options2: any;
  options3: any;
  echartsInstance: any;
  Echart_width:any;
  Font_size=26;
  BorderWidth=1.8;
  sub:any;
  updateOptions1: any;
  updateOptions2: any;
  updateOptions3: any;
  constructor(
    private service:DetailNumService
  ) { 
    this.service.a.subscribe(data=>{
        let cm_up_rate=data.cm_up_rate/100;
        let cm_dow_rate=data.cm_dow_rate/100;
        let cm_online=data.cm_online/100;
      this.updateOptions1 = {
          series:[{
            data: [cm_up_rate]
        }]
      };
      this.updateOptions2 = {
        series:[{
          data: [cm_dow_rate]
        }]
      };
      this.updateOptions3 = {
        series:[{
          data: [cm_online]
        }]
      };

    })

  }
  onChartInit(e: any) {
    this.echartsInstance = e;
  }
  ngOnInit() {
    
      if(document.body.clientWidth<=1000&&document.body.clientWidth>600){
          this.Font_size=22;
          this.BorderWidth=1; 
      }else if(document.body.clientWidth<=600&&document.body.clientWidth>500){
        this.Font_size=20;
        this.BorderWidth=1; 
      }else if(document.body.clientWidth<=500&&document.body.clientWidth>400){
        this.Font_size=18;
        this.BorderWidth=1; 
      }else if(document.body.clientWidth<=400){
        this.Font_size=16;
        this.BorderWidth=1; 
      
      }

    
      this.sub=Observable.fromEvent(window,'resize')
      .subscribe((event) => {
        this.Echart_width=this.echartsInstance.getWidth();
        console.log(this.Echart_width)
        if(this.Echart_width<=500&&this.Echart_width>156){
          this.Font_size=26;
          this.BorderWidth=1.8; 
        }else if(this.Echart_width<=156&&this.Echart_width>136){
          this.Font_size=22;
          this.BorderWidth=1; 
        }else if(this.Echart_width<=136&&this.Echart_width>100){
          this.Font_size=20;
          this.BorderWidth=1; 
        }else if(this.Echart_width<=100){
          this.Font_size=16;
          this.BorderWidth=1; 
        }
    
      //更新图表1
      this.updateOptions1 = {
           series:[{
            outline: {
              itemStyle: {
                borderWidth: this.BorderWidth,
              },
              borderDistance: this.BorderWidth*1.5
            },
            label: {
              normal: {
                textStyle: {
                  fontSize: this.Font_size
                }
              }
            },
           }]
        };

      //更新图表2
      this.updateOptions2 = {
        series:[{
         outline: {
           itemStyle: {
             borderWidth: this.BorderWidth,
           },
           borderDistance: this.BorderWidth*1.5
         },
         label: {
           normal: {
             textStyle: {
               fontSize: this.Font_size
             }
            }
          },
         }]
        };

        //更新图表3
      this.updateOptions3 = {
        series:[{
         outline: {
           itemStyle: {
             borderWidth: this.BorderWidth,
           },
           borderDistance: this.BorderWidth*1.5
         },
         label: {
           normal: {
             textStyle: {
               fontSize: this.Font_size
             }
            }
          },
         }]
        };
      
      });
  }

  ngAfterViewInit(){
      this.options1 = {
        series: [{
          type: 'liquidFill',
          color: ['#49d088', '#38b470', '#2aaf66'],
          amplitude:10,
          waveLength: '500px',
          period:900,
          data: [0.2],
          radius: '72%',
          backgroundStyle: {
  
            borderColor: '#9FE2AF',
            borderWidth: 0.5,
            color: new echarts.graphic.LinearGradient(
              0.1, 0, 0, 1, [{
                offset: 0,
                color: '#fff'
              }, {
                offset: 0.4,
                color: '#B0F5C2'
              }, {
                offset: 1,
                color: '#99DCA9'
              }]
            ),
  
          },
          outline: {
            itemStyle: {
              borderColor: '#d6e4da',
              borderWidth: this.BorderWidth,
              shadowBlur: 0
            },
            borderDistance: this.BorderWidth*1.5
          },
          label: {
            normal: {
              formatter: function(params) {
                return   (params.data*100).toFixed(2)+"%";
              },
              textStyle: {
                fontSize: this.Font_size,
                color:"#34c46e"
              }
            }
          },
          itemStyle: {
            opacity: 0.95,
            shadowBlur: 10,
            shadowColor: '#4ABD74'
          },
  
        }]
      };
      this.options2 = {
        series: [{
          type: 'liquidFill',
          color: ['#4cc2ff', '#94d9fc', '#e7f7ff'],
          amplitude:10,
          waveLength: '500px',
          period:900,
          data: [0.48],
          radius: '72%',
          backgroundStyle: {
  
            borderColor: '#4cc2ff',
            borderWidth: 0.5,
            color: new echarts.graphic.LinearGradient(
              0.1, 0, 0, 1, [{
                offset: 0,
                color: '#fff'
              }, {
                offset: 0.4,
                color: '#94d9fc'
              }, {
                offset: 1,
                color: '#4cc2ff'
              }]
            ),
  
          },
          outline: {
            itemStyle: {
              borderColor: '#d6e4da',
              borderWidth: this.BorderWidth,
              shadowBlur: 0
            },
            borderDistance: this.BorderWidth*1.5
          },
          label: {
            normal: {
              formatter: function(params) {
                return    (params.data*100).toFixed(2)+"%";
              },
              textStyle: {
                fontSize: this.Font_size,
                color:"#4cc2ff"
              }
            }
          },
          itemStyle: {
            opacity: 0.95,
            shadowBlur: 10,
            shadowColor: '#4cc2ff'
          },
  
        }]
      };
      this.options3 = {
        series: [{
          type: 'liquidFill',
          color: ['#fb4765', '#fb92a3', '#ef2d4d'],
          amplitude:10,
          waveLength: '500px',
          period:900,
          data: [0.6],
          radius: '72%',
          backgroundStyle: {
  
            borderColor: '#fb4765',
            borderWidth: 0.5,
            color: new echarts.graphic.LinearGradient(
              0.1, 0, 0, 1, [{
                offset: 0,
                color: '#fff'
              }, {
                offset: 0.4,
                color: '#fb93a3'
              }, {
                offset: 1,
                color: '#fb4765'
              }]
            ),
  
          },
          outline: {
            itemStyle: {
              borderColor: '#d6e4da',
              borderWidth: this.BorderWidth,
              shadowBlur: 0
            },
            borderDistance: this.BorderWidth*1.5
          },
          label: {
            normal: {
              formatter: function(params) {
                return   (params.data*100).toFixed(2)+"%";
              },
              textStyle: {
                fontSize: this.Font_size,
                color:"#ef2d4d"
              }
            }
          },
          itemStyle: {
            opacity: 0.95,
            shadowBlur: 10,
            shadowColor: '#ef2d4d'
          },
  
        }]
      };
  
  }
 
  ngOnDestroy(){
    this.sub.unsubscribe();
  }  
}
