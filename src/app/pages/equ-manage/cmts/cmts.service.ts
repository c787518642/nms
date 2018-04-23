import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable()
export class CmtsService {
  public emitter = new EventEmitter()
  constructor(
    private http: HttpClient,
  ) { }
  // cmts列表
  getCmtsList() {
    let path=environment.getPath()+"/tw-cmts-server/cmts/cmtsjcxx2"
    return this.http.post(path, {})
  }
  // cmts列表
  getDcmtsList() {
    let path=environment.getPath()+"/tw-cmts-server/dcmts/dcmts"
    return this.http.post(path, {})
  }
  // cmts上行列表
  getCmtsUpstreamList(obj: { cid }) {
    let path=environment.getPath()+'/tw-cmts-server/cmts/updata';
    return this.http.post(path , toFormData(obj), {
      headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' }),
    })
  }
  // cmts下行列表
  getCmtsDownstreamList(obj: { cid }) {
    let path=environment.getPath()+'/tw-cmts-server/cmts/dowdata';
    return this.http.post(path, toFormData(obj), {
      headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' }),
    })
  }
  // cmts上联口列表
  getCmtsEthernetList(obj: { cid }) {
    let path=environment.getPath()+'/tw-cmts-server/cmts/cmts_ethernet';
    return this.http.post(path , toFormData(obj), {
      headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' }),
    })
  }

}
