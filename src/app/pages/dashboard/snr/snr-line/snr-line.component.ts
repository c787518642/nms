import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'tw-snr-line',
  templateUrl: './snr-line.component.html',
  styleUrls: ['./snr-line.component.scss']
})

export class SnrLineComponent  implements OnInit {
  options: any;
  CONTENT="显示最近一天";
  data_length=[
    { content: '显示最近一天' },
    { content: '显示最近一周' },
    { content: '显示最近一月' },
  ];
   
  get_line(conetent){
      this.CONTENT=conetent;
      
  }

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
    
            data:['优秀','良好','一般','差'],
        
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
            data: [48, 62,51, 44, 90, 60, 50],
            
        }
    ]
    };
    
  }

}

