import { Component, OnInit } from '@angular/core';
declare var echarts;
@Component({
  selector: 'tw-up-line',
  templateUrl: './up-line.component.html',
  styleUrls: ['./up-line.component.scss']
})
export class UpLineComponent implements OnInit {
  options: any;
  constructor() { }

  ngOnInit() {
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
  
          data:['优秀','良好','一般','较差','差'],
      
      },
      series: [{
          name:"优秀",
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
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          
      },{
          name:"良好",
          type: 'line',
          smooth: true,
          symbol:"emptyCircle",
          symbolSize:10,
          showSymbol: false,
          itemStyle: {normal:{color: '#5fc7fe'}},
          lineStyle: {
              normal: {
                  width: 4
              }
          },
          data: [188, 232,191, 324, 290, 330, 120],
          
      },
      {
          name:"一般",
          type: 'line',
          smooth: true,
          symbol:"emptyCircle",
          symbolSize:10,
          showSymbol: false,
          itemStyle: {normal:{color: '#fddc42'}},
          lineStyle: {
              normal: {
                  width: 4
              }
          },
          data: [88, 132,91, 124, 190, 130, 90],
          
      },
      {
          name:"较差",
          type: 'line',
          smooth: true,
          symbol:"emptyCircle",
          symbolSize:10,
          showSymbol: false,
          itemStyle: {normal:{color: '#f39c11'}},
          lineStyle: {
              normal: {
                  width: 4
              }
          },
          data: [48, 62,51, 44, 90, 60, 50],
          
      },
      {
        name:"差",
        type: 'line',
        smooth: true,
        symbol:"emptyCircle",
        symbolSize:10,
        showSymbol: false,
        itemStyle: {normal:{color: '#e64d3d'}},
        lineStyle: {
            normal: {
                width: 4
            }
        },
        data: [28, 32,41, 24, 60, 50, 30],
        
    }
  ]
  };
  }

}
