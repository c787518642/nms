import { Component, OnInit } from '@angular/core';
declare var echarts;
@Component({
  selector: 'tw-snr-body',
  templateUrl: './snr-body.component.html',
  styleUrls: ['./snr-body.component.scss']
})
export class SnrBodyComponent implements OnInit {
  options: any;
  constructor() { }

  ngOnInit() {
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
        itemGap:30,
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
                {value:935, name:'优秀',itemStyle: {normal:{color: '#43d280'}}},
                {value:60, name:'良好',itemStyle: {normal:{color: '#5fc7fe'}}},
                {value:44, name:'一般',itemStyle: {normal:{color: '#fddc42'}}},
                {value:35, name:'差',itemStyle: {normal:{color: '#f39c11'}}}
            
            ]
        }
    ]
    };
    
  }

}
