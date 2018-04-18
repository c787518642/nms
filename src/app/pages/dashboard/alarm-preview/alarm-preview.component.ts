import { AlarmPreviewService } from './alarm-preview.service';
import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-alarm-preview',
  templateUrl: './alarm-preview.component.html',
  styleUrls: ['./alarm-preview.component.scss']
})
export class AlarmPreviewComponent implements OnInit {
  
  constructor(
    private alarmPreviewService:AlarmPreviewService
  ) { }
  
  items=[{
    name:'SNR',range:'<= 27dB',value:"0%"
  },{
    name:'NPA',range:'< 60 Points',value:"0%"
  },{
    name:'BER',range:'>= 0.01',value:"0%"
  }
  ]
  code:any;
  alarm_data:any;
  ngOnInit() {
    this.alarmPreviewService.getAlarm().subscribe(response => {
      this.code=response["code"];
      if(this.code==1){
        this.alarm_data=response['data'];
        this.items[0].value=this.alarm_data.snr;
        this.items[1].value=this.alarm_data.cmts;
        this.items[2].value=this.alarm_data.ber;
      }
      
   })
  }

}
