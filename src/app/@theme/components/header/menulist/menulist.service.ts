import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { environment } from '../../../../../environments/environment';

@Injectable()
export class MenulistService {
  public npa = new EventEmitter();
  public alarm = new EventEmitter();
  npaShow: boolean = false;
  alarmShow: boolean = false;
 
  private items;
  constructor(
    private http:HttpClient
  ) { }
  getAlarm(){
    let path=environment.getPath()+'/tw-cmts-server/login/get_gj_count';
    return this.http.post(path,{})
  }
  getNpa(){
    let path=environment.getPath()+'/tw-cmts-server/login/get_npa_info';
    return this.http.post(path,{})
  }
  toggle(x) {
    if (x == 'user') {
      this.npaShow = false;
      this.alarmShow = false;

    }
    else if (x == "alarm") {
      if (!this.alarmShow) {
        this.npaShow = false;
        this.alarmShow = true;
      } else {
        this.npaShow = false;
        this.alarmShow = false;
      }
    } else if (x == "npa") {
      if (!this.npaShow) {
        this.npaShow = true;
        this.alarmShow = false;
      } else {
        this.npaShow = false;
        this.alarmShow = false;
      }
    } else {
      this.npaShow = false;
      this.alarmShow = false;
    }
    this.alarm.emit(this.alarmShow)
    this.npa.emit(this.npaShow)
  }
}
