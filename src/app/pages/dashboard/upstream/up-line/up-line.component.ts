import { UpstreamComponent } from './../upstream.component';
import { UpstreamService } from './../upstream.service';
import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../../environments/environment';
declare var echarts;
@Component({
  selector: 'tw-up-line',
  templateUrl: './up-line.component.html',
  styleUrls: ['./up-line.component.scss']
})
export class UpLineComponent implements OnInit {
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
  
  constructor(private upstreamService:UpstreamService) { }

  ngOnInit() {
    this.upstreamService.getUpLine().subscribe(response =>{
        if(response['code']&&response['code']==1){
            let data=response['data'];
            let x=[];
            let value1=[];
            let value2=[];
            let value3=[];
            let value4=[];
            let value5=[];
            for(let i=0;i<data.length;i++){
                x[i]=data[i].time;
                value1[i]=data[i].data[0].pie;
                value2[i]=data[i].data[1].pie+data[i].data[2].pie;
                value3[i]=data[i].data[3].pie+data[i].data[4].pie;
                value4[i]=data[i].data[5].pie+data[i].data[6].pie;
                value5[i]=data[i].data[7].pie+data[i].data[8].pie;
            }

            this.options = {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        lineStyle: {
                            color: '#fff',
                            type:"dashed"
                        }
                    },
                    borderRadius: 4,   
                    padding: [5, 10],
                    textStyle: {
                        fontSize:16,
                        fontWeight: 200,
                    
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
                        axisLabel:{interval:0,textStyle:{color:'#212529',fontSize:16} },
                        axisTick : {show: false},
                        data:x,
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
                    top:15,
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
                    data: value1,
                    
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
                    data: value2,
                    
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
                    data: value3,
                    
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
                    data: value4,
                    
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
                  data: value5,
                  
              }
            ]
          };

        }
    })

   
  }

}
