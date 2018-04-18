import { Component, OnInit, Input } from '@angular/core';
import { MenulistService } from './menulist.service';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-menulist',
  templateUrl: './menulist.component.html',
  styleUrls: ['./menulist.component.scss']
})
export class MenulistComponent implements OnInit {
  // @Input('menus') menus 
  menus: any[];
  @Input("npaShow") npa_show;
  @Input("alarmShow") alarm_show;
  alarm = [{
    name: '严重告警', value: "--", color: 'red'
  }, {
    name: '主要告警', value: "--", color: 'orange'
  }, {
    name: '次要告警', value: "--", color: 'yellow'
  }, {
    name: '提示告警', value: "--", color: 'blue'
  }];

  npa = [{ time: '日', value: "--" }, { time: '周', value: "--" }, { time: '月', value: "--" }]

  constructor(
    private menulistService: MenulistService
  ) {
    this.menulistService.alarm.subscribe(data => {
      this.alarm_show = data;
    })
    this.menulistService.npa.subscribe(data => {
      this.npa_show = data;
    })
  }

  ngOnInit() {
    // 5分钟请求一次
    let func=()=>{
      this.getAlarm()
      this.getNpa()
      setTimeout(() => {
        func();
      }, 1000 * 60 * 5);
    }
    func();
  

  }
  getAlarm() {
    this.menulistService.getAlarm().subscribe((data) => {
      if (data["code"] && data["code"] == 1) {
        let a = data["data"];
        this.alarm[0].value = a.red_num
        this.alarm[1].value = a.orange_num
        this.alarm[2].value = a.yellow_num
        this.alarm[3].value = a.blue_num
      }
    })
  }
  getNpa() {
    this.menulistService.getNpa().subscribe((data) => {
      if (data["code"] && data["code"] == 1) {
        let a = data["data"];
        this.npa[0].value = a.avg
        this.npa[1].value = a.avg_week
        this.npa[2].value = a.avg_month
      }
    })
  }
}
