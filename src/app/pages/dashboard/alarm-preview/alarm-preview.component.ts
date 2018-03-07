import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alarm-preview',
  templateUrl: './alarm-preview.component.html',
  styleUrls: ['./alarm-preview.component.scss']
})
export class AlarmPreviewComponent implements OnInit {
  items:{name:string,range:string,value:number}[]
  constructor() { }

  ngOnInit() {
    this.items=[{
      name:'SNR',range:'<= 27dB',value:4.74
    },{
      name:'NPA',range:'< 60 Points',value:1.25
    },{
      name:'BER',range:'>= 0.01',value:1.00
    }
    ]
  }

}
