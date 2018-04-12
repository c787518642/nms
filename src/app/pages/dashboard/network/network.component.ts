import { NetworkService } from './network.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';

declare var echarts;
@Component({
  selector: 'tw-network',
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.scss']
})
export class NetworkComponent implements OnInit,AfterViewInit {
  options: any;
  X_data=[];
  Data_obj=[];
  constructor(
    private networkService:NetworkService
  ) { }

  ngOnInit() {
      this.networkService.getNetwork().subscribe(response => {
        let code=response['code'];
        let data=response['data'];
        for(let i=0;i<data.length;i++){
            this.X_data[i]=data[i].time
            this.Data_obj[i]=data[i].npa
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
           
            xAxis: [
                {   
                    type: 'category',
                    boundaryGap: false,
                    axisLine: { show: true,lineStyle:{ color:'#212529' }},
                    axisLabel:{interval:4,textStyle:{color:'#212529',fontSize:16} },
                    axisTick : {show: false},
                    data:this.X_data,
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
                data: this.Data_obj,
                
            }
        ]
        };
      })
  }
  ngAfterViewInit(){
   
  }

}
