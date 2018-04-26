import { Component, OnInit,AfterViewInit, Input,OnChanges} from '@angular/core';
import { Observable }from'rxjs/Rx';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { DetailNumService } from '../detail-num.service';
declare var echarts;
@Component({
  selector: 'app-water-chart',
  templateUrl: './water-chart.component.html',
  styleUrls: ['./water-chart.component.scss']
})
export class WaterChartComponent implements OnInit,AfterViewInit,OnChanges{
  @Input() Item;
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
  style={
    color1:"#49d088",    //主体颜色
    color2:"#4ABD74",    //波浪颜色
    color3:"#99DCA9",    //背景渐变深色
    color4:"#B0F5C2",    //背景渐变浅色
    font_color:"#34c46e" //字体颜色 
  }
  green={
    color1:"#49d088",    //主体颜色
    color2:"#4ABD74",    //波浪颜色
    color3:"#99DCA9",    //背景渐变深色
    color4:"#B0F5C2",    //背景渐变浅色
    font_color:"#34c46e" //字体颜色 
  }
  yellow={
    color1:"#fddc42",     //主体颜色
    color2:"#ffee9f",     //波浪颜色
    color3:"#fdefaf",     //背景渐变深色
    color4:"#fff9dc",     //背景渐变浅色
    font_color:"#f9d324"  //字体颜色 
  }
  orange={
    color1:"#ff9600",     //主体颜色
    color2:"#f9b15d",     //波浪颜色
    color3:"#fdd397",     //背景渐变深色
    color4:"#f9e1bd",     //背景渐变浅色
    font_color:"#ff8400"   //字体颜色
  }
  blue={
    color1:"#4cc2ff",     //主体颜色
    color2:"#58c6ff",     //波浪颜色
    color3:"#70ceff",     //背景渐变深色
    color4:"#9bdcfd",     //背景渐变浅色
    font_color:"#4cc2ff"  //字体颜色
  }
  red={
    color1:"#fb4765",     //主体颜色
    color2:"#ef2d4d",     //波浪颜色
    color3:"#fb4765",     //背景渐变深色
    color4:"#fb93a3",     //背景渐变浅色
    font_color:"#ef2d4d"   //字体颜色
  }
  constructor(
    private service:DetailNumService
  ) {}
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
     
  }
   
  ngOnDestroy(){
    this.sub.unsubscribe();
  }  
  ngOnChanges(){
    if(this.Item){
      let cm_up_rate=this.Item.cm_up_rate/100;
      let cm_dow_rate=this.Item.cm_dow_rate/100;
      let cm_online=this.Item.cm_online/100;
      this.drawChart1(cm_up_rate);
      this.drawChart2(cm_dow_rate);
      this.drawChart3(cm_online);
    } 
  }

  drawChart1(value) {
    if(value>=0&&value<=0.2){
      this.style=this.green;
    }else if(value>0.2&&value<0.4){
      this.style=this.blue;
    }else if(value>=0.4&&value<=0.6){
      this.style=this.yellow;
    }else if(value>0.6&&value<0.8){
      this.style=this.orange;
    }else if(value>=0.8&&value<=1){
      this.style=this.red;
    }
    this.options1 = {
      series: [{
        type: 'liquidFill',
        color: [this.style.color1],
        amplitude:10,
        waveLength: '500px',
        period:900,
        data: [value],
        radius: '72%',
        backgroundStyle: {

          borderColor: this.style.color3,
          borderWidth: 0.5,
          color: new echarts.graphic.LinearGradient(
            0.1, 0, 0, 1, [{
              offset: 0,
              color: '#fff'
            }, {
              offset: 0.4,
              color: this.style.color4
            }, {
              offset: 1,
              color: this.style.color3
            }]
          ),

        },
        outline: {
          itemStyle: {
            borderColor: '#d6e4da',    //最外围轮廓颜色
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
              color:this.style.font_color
            }
          }
        },
        itemStyle: {             
          opacity: 0.95,
          shadowBlur: 10,
          shadowColor: this.style.color2
        },

      }]
    };
  }
  drawChart2(value) {
    if(value>=0&&value<=0.2){
      this.style=this.green;
    }else if(value>0.2&&value<0.4){
      this.style=this.blue;
    }else if(value>=0.4&&value<=0.6){
      this.style=this.yellow;
    }else if(value>0.6&&value<0.8){
      this.style=this.orange;
    }else if(value>=0.8&&value<=1){
      this.style=this.red;
    }
    this.options2 = {
      series: [{
        type: 'liquidFill',
        color: [this.style.color1],
        amplitude:10,
        waveLength: '500px',
        period:900,
        data: [value],
        radius: '72%',
        backgroundStyle: {

          borderColor: this.style.color3,
          borderWidth: 0.5,
          color: new echarts.graphic.LinearGradient(
            0.1, 0, 0, 1, [{
              offset: 0,
              color: '#fff'
            }, {
              offset: 0.4,
              color: this.style.color4
            }, {
              offset: 1,
              color: this.style.color3
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
              color:this.style.font_color
            }
          }
        },
        itemStyle: {
          opacity: 0.95,
          shadowBlur: 10,
          shadowColor: this.style.color2
        },

      }]
    };
  }
  drawChart3(value) {
    if(value>=0&&value<=0.2){
      this.style=this.red;
    }else if(value>0.2&&value<0.4){
      this.style=this.orange;
    }else if(value>=0.4&&value<=0.6){
      this.style=this.yellow;
    }else if(value>0.6&&value<0.8){
      this.style=this.blue;
    }else if(value>=0.8&&value<=1){
      this.style=this.green;
    }
    this.options3 = {
      series: [{
        type: 'liquidFill',
        color: [this.style.color1],
        amplitude:10,
        waveLength: '500px',
        period:900,
        data: [value],
        radius: '72%',
        backgroundStyle: {

          borderColor: this.style.color3,
          borderWidth: 0.5,
          color: new echarts.graphic.LinearGradient(
            0.1, 0, 0, 1, [{
              offset: 0,
              color: '#fff'
            }, {
              offset: 0.4,
              color: this.style.color4
            }, {
              offset: 1,
              color: this.style.color3
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
              color:this.style.font_color
            }
          }
        },
        itemStyle: {
          opacity: 0.95,
          shadowBlur: 10,
          shadowColor: this.style.color2
        },

      }]
    };
  }
  
}
