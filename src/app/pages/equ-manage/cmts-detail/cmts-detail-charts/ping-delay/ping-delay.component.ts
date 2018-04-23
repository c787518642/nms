import { Component, OnInit,AfterViewInit,OnChanges,Input} from '@angular/core';

@Component({
  selector: 'tw-ping-delay',
  templateUrl: './ping-delay.component.html',
  styleUrls: ['./ping-delay.component.scss']
})
export class PingDelayComponent implements OnInit,AfterViewInit,OnChanges {
  @Input() Item;
  options:any;
  updateOptions:any;
  x_obj=[];
  data_obj=[];
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
          left:60,
          width:"92%"
      },
      xAxis: [
          {   
              show:false,
              type: 'category',
              axisLine: { show: true,lineStyle:{ color:'#212529' }},
              axisLabel:{interval:40,textStyle:{color:'#212529',fontSize:14} },
              axisTick : {show: false},
              data:this.x_obj,
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
          data: this.data_obj,
          
        }
      ]
    };
  }

  ngOnChanges(){
    var data=[];
    var x=[];
    if(this.Item){
     
        for(var i=0;i<this.Item.length;i++){
            x.push(this.Item[i].time)
            data.push(this.Item[i].cmts_delay);
         }
         
    }
    this.x_obj=x;
    this.data_obj=data;
    
     //更新图表
     this.updateOptions = {
        xAxis: [{   
            data:x,
        }],
        series:[{
            data:data
        }]
    };
  }
}
