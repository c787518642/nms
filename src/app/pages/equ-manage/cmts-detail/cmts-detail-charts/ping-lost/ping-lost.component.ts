import { Component, OnInit,AfterViewInit } from '@angular/core';

@Component({
  selector: 'tw-ping-lost',
  templateUrl: './ping-lost.component.html',
  styleUrls: ['./ping-lost.component.scss']
})
export class PingLostComponent implements OnInit,AfterViewInit {
  options:any;
  constructor() { }

  ngOnInit() {
  }
  
  ngAfterViewInit(){
    this.options = {
      tooltip: {
          trigger: 'axis',
        
          axisPointer: {
              lineStyle: {
                  color: '#fff',
                  type:"dashed"
              }
          },
          backgroundColor: 'rgba(255,255,255,1)',
          borderRadius: 8,   
          padding: [5, 10],
          textStyle: {
              fontSize:26,
              color:'#000',
              fontWeight: 500,
              fontFamily:"Arial"
          
          },
          extraCssText: 'box-shadow: 0 0 5px rgba(0,0,0,0.3)'
      },
      grid:{
          top:100,
          bottom:35,
          left:60
      },
      xAxis: [
          {   
              type: 'category',
              axisLine: { show: true,lineStyle:{ color:'#212529' }},
              axisLabel:{interval:0,textStyle:{color:'#212529',fontSize:14} },
              axisTick : {show: false},
              data:['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          },
      ],
      yAxis: [
          {   
              axisTick : {show: false},
              splitLine: {show:true},
              axisLabel:{textStyle:{color:'#212529',fontSize:14} },
              axisLine: { show: false,lineStyle:{ color:'#212529'}},
          },
      ],
      legend: {
          x : 'center',
          y : 'top',
          top:15,
          height:100,
          textStyle:{
              fontSize:20,
          },
  
          data:['丢包率'],
      
      },
      series: [{
          name:"丢包率",
          type: 'line',
          smooth: true,
          symbol:"emptyCircle",
          symbolSize:10,
          showSymbol: false,
          itemStyle: {normal:{color: '#43d280'}},
          lineStyle: {
              normal: {
                  width: 4
              }
          },
          data: [30, 20, 10, 15, 12, 13.3, 13.2],
          
       }
     ]
    };
  }
}
