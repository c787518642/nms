import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class CmtsService {
  public emitter = new EventEmitter()
  constructor(
    private http: HttpClient,
  ) { }
  // cmts列表
  getCmtsList() {
    return this.http.post("/tw-cmts-server/cmts/cmtsjcxx2", {})
  }
  // cmts列表
  getCmtsUpstreamList(obj: { cid }) {
    return this.http.post('/tw-cmts-server/cmts/updata', toFormData(obj), {
      headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' }),
    })
  }
}
