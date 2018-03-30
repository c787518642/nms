import { Component, OnInit, Optional } from '@angular/core';
import { take } from 'rxjs/operators/take';

@Component({
  selector: 'tw-cmts-detail-charts',
  templateUrl: './cmts-detail-charts.component.html',
  styleUrls: ['./cmts-detail-charts.component.scss']
})
export class CmtsDetailChartsComponent implements OnInit {
  show_detail=[true,false,false,false,false,false,false];
  selectedKey:any;
  CONTENT="Ping丢包率";
  data=[
    {index:0, content: 'Ping丢包率',class:"selected"},
    {index:1, content: 'Ping延时',class:"normal"},
    {index:2, content: '内存' ,class:"normal"},
    {index:3,content: '温度' ,class:"normal"},
    {index:4, content: 'CM在线数' ,class:"normal"},
    {index:5, content: '流量' ,class:"normal"},
    {index:6, content: 'NPA',class:"normal"},

  ];
  options1: any;
  options2: any;
  options3: any;
  options4: any;
  options5: any;
  options6: any;
  options7: any;
  constructor() { }
  show(key){
    this.data[0].class="normal";
    this.selectedKey=key;
    for(let i=0;i<this.show_detail.length;i++){
        this.show_detail[i]=false;
    }
    this.show_detail[key.index]=true;  
   }
   show2(key){
     this.CONTENT=key.content;
    for(let i=0;i<this.show_detail.length;i++){
        this.show_detail[i]=false;
    }
    this.show_detail[key.index]=true;  
   }
  ngOnInit() {
    this.options1 = {
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
  

  this.options2 = {
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

        data:['延时'],
    
    },
    series: [{
        name:"延时",
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
        data: [82, 93, 90, 93, 129, 133, 113],
        
    }
]
};

this.options3 = {
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

        data:['内存'],
    
    },
    series: [{
        name:"内存",
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
        data: [18, 19, 19, 24, 29,33, 32],
        
    }
]
};


this.options4 = {
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

        data:['温度'],
    
    },
    series: [{
        name:"温度",
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
        data: [42, 32, 31, 48, 39, 33,46],
        
    }
]
};


this.options5 = {
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

        data:['Total','Online'],
    
    },
    series: [{
        name:"Total",
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
        data: [1820, 1932, 1901, 1934, 2290, 2330, 2320],
        
    },{
        name:"Online",
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
        data: [688, 632,591, 624, 690, 630, 620],
        
    }
   
]
};


this.options6 = {
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

        data:['流量'],
    
    },
    series: [{
        name:"流量",
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
        
    }
]
};


this.options7 = {
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

        data:['NPA'],
    
    },
    series: [{
        name:"NPA",
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
        data: [82, 92, 91, 94, 90, 91, 92],
        
    }
]
};



  }

}
