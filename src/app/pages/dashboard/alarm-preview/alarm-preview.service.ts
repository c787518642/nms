import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class AlarmPreviewService {

  constructor(private http:HttpClient) { }
  getAlarm(){
    return this.http.post("/tw-cmts-server/login/cmtsgn",{})
  }
}
