import { Component, OnInit,ViewChild,ElementRef,Input,OnChanges} from '@angular/core';
import { DetailNumService } from '../detail-num.service';
@Component({
  selector: 'tw-canvas-chart',
  templateUrl: './canvas-chart.component.html',
  styleUrls: ['./canvas-chart.component.scss']
})
export class CanvasChartComponent implements OnInit,OnChanges {
  @Input() Item;
  @ViewChild('canvas1') canvas1: ElementRef;
  @ViewChild('canvas2') canvas2: ElementRef;
  @ViewChild('canvas3') canvas3: ElementRef;
  desc1="CPU";
  desc2="Mem";
  desc3="Temp";
  cpu_value=0;
  mem_value=0;
  temp_value=0;

  constructor(private service:DetailNumService) { 
    
  }
 
  ngOnInit() {
  }
  ngOnChanges(){
     if(this.Item){
      this.cpu_value=this.Item.cpu_r;
      this.mem_value=this.Item.mem_r;
      this.temp_value=this.Item.temp;
      this.draw(this.canvas1, this.cpu_value,0,100,"#42db7d");
      this.draw(this.canvas2,this.mem_value,0,100,"#fddc42");
      this.draw(this.canvas3,this.temp_value,0,100,"#4cc2ff");
     }
  }
  //CPU
  draw(obj,value,min,max,color){
    if(value=="--"||value==undefined){value=0;}
    let canvas1 = obj.nativeElement;
    canvas1.height=canvas1.width;
    var width=canvas1.height/2;
    var height=canvas1.height/2;
    var ctx = canvas1.getContext('2d');
    var centerX=width;       
    var centrtY=height-0.26*height;
    var radius=0.6*width;          //圆环半径
    var linewidth=12;        //圆环粗细
    var color=color;     //圆环颜色   绿色为#5ce191  深色为#42db7d
    var min=min;
    var max=max;
    var value=value;   //进度值
    if(value>max){
      value=max;
    }
    var enAngle=0.75*Math.PI+value/(max-min)*(1.5*Math.PI);
    var Rx=width-radius*Math.cos(enAngle-Math.PI);
    var Ry=centrtY-radius*Math.sin(enAngle-Math.PI);
    var angle_obj=0.75*Math.PI; 
   
    var timer=setInterval(draw_process,10)
   
    function draw_process(){
      
        if(angle_obj>enAngle){
            angle_obj=enAngle-(enAngle-angle_obj);
            clearTimeout(timer);
        }
        var Rx_obj=width-radius*Math.cos(angle_obj-Math.PI);
        var Ry_obj=centrtY-radius*Math.sin(angle_obj-Math.PI);
        ctx.clearRect(0,0,canvas1.width,canvas1.width);  
         //画底部圆环
        ctx.beginPath();
        ctx.lineCap = 'round';    //笔帽带上圆角
        ctx.lineWidth = linewidth;
        ctx.strokeStyle = '#ebeff5';
        ctx.arc(centerX,centrtY,radius,0.75*Math.PI,2.25*Math.PI);
        ctx.stroke();
        ctx.closePath();
        //画进度条
        ctx.beginPath();
        ctx.lineCap = 'round';    //笔帽带上圆角
        ctx.lineWidth = linewidth;
        ctx.strokeStyle = '#5ce191';
        ctx.arc(centerX,centrtY,radius,0.75*Math.PI,angle_obj);
        ctx.stroke();
        ctx.closePath();

        //画圆圈
        ctx.beginPath();
        ctx.lineCap = 'round';    //笔帽带上圆角
        ctx.lineWidth = 5;
        ctx.strokeStyle = '#5ce191';
        ctx.arc(Rx_obj,Ry_obj,8,0*Math.PI,2*Math.PI);
        ctx.stroke();
        ctx.closePath();

        //画圆圈-内圆
        ctx.beginPath();
        ctx.lineCap = 'round';    //笔帽带上圆角
        ctx.lineWidth = 8;
        ctx.strokeStyle = '#fff';
        ctx.arc(Rx_obj,Ry_obj,4,0*Math.PI,2*Math.PI);
        ctx.stroke();
        ctx.closePath();

        angle_obj+=0.01*Math.PI;
        
    }
  
  }
  
  
}
