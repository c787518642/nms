import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class CmtsService {
  public emitter=new EventEmitter()
  constructor(
    private http:HttpClient, 
  ) { }
  // cmts列表
  getCmtsList(){
    return this.http.post("/tw-cmts-server/cmts/cmtsjcxx2",{})
  }
}
