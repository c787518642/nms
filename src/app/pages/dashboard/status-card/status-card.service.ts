import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class StatusCardService {
  public emitter=new EventEmitter()
  constructor(private http:HttpClient) {

   }
  deviceCount=[{
    name:'hub',
    count:40,
    color:"purple"
  },{
    name:'cmts',
    count:40,
    color:"green"
  },{
    name:'dcmts',
    count:140,
    color:"blue"
  },{
    name:'op',
    count:4000,
    color:"orange"
  }];
  get(){
    return this.deviceCount
  }
  getWlzy(){
    return this.http.post("/tw-cmts-server/login/wlzy",{})
  }
}
