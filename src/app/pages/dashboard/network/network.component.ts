import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var echarts;
@Component({
  selector: 'tw-network',
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.scss']
})
export class NetworkComponent implements OnInit,AfterViewInit {
  options: any;
  constructor() { }

  ngOnInit() {}
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
     
      xAxis: [
          {   
              type: 'category',
              boundaryGap: false,
              axisLine: { show: true,lineStyle:{ color:'#212529' }},
              axisLabel:{interval:0,textStyle:{color:'#212529',fontSize:16} },
              axisTick : {show: false},
              data:['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          },
      ],
      yAxis: [
          {   
              axisTick : {show: false},
              splitLine: {show:true},
              axisLabel:{textStyle:{color:'#212529',fontSize:16} },
              axisLine: { show: false,lineStyle:{ color:'#212529'}},
          },
      ],
      legend: {
          x : 'center',
          y : 'top',
          top:10,
          itemGap:50,
          textStyle:{
              fontSize:20,
          },
  
          data:['NPA'],
      
      },
      series: [{
          name:"NPA",
          type: 'line',
          smooth: true,
          symbol:"emptyCircle",
          symbolSize:13,
          showSymbol: true,
          itemStyle: {normal:{color: '#43d280'}},
          lineStyle: {
              normal: {
                  width: 4
              }
          },
          areaStyle: {
            normal: {
              color: "#88f4b5"
            }
          },
          data: [90, 93, 91, 94, 90, 98, 95],
          
      }
  ]
  };
  }

}
