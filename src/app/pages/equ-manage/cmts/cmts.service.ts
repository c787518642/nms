import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { ActivatedRoute } from '@angular/router';

@Injectable()
export class CmtsService {
  public emitter = new EventEmitter()
  constructor(
    private http: HttpClient,
    private route:ActivatedRoute,
  ) { }
  // cmts列表
  getCmtsList() {
    let path = environment.getPath() + "/tw-cmts-server/cmts/cmtsjcxx2"
    return this.http.post(path, {})
  }
  // cmts列表
  getDcmtsList() {
    let path = environment.getPath() + "/tw-cmts-server/dcmts/dcmts"
    return this.http.post(path, {})
  }
  // cmts上行列表
  getCmtsUpstreamList(obj: { cid ,domainIndex?}) {
    let path = environment.getPath() + '/tw-cmts-server/cmts/updata';
    return this.http.post(path, toFormData(obj), {
      headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' }),
    })
  }
  // cmts下行列表
  getCmtsDownstreamList(obj: { cid,domainIndex? }) {
    let path = environment.getPath() + '/tw-cmts-server/cmts/dowdata';
    return this.http.post(path, toFormData(obj), {
      headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' }),
    })
  }
  // cmts上联口列表
  getCmtsEthernetList(obj: { cid }) {
    let path = environment.getPath() + '/tw-cmts-server/cmts/cmts_ethernet';
    return this.http.post(path, toFormData(obj), {
      headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' }),
    })
  }
  // MAC域列表
  getMacDomainList(cid) {
    let path=environment.getPath()+'/tw-cmts-server/otherObject';
    var json_Obj={
      objectUrl:"tw-nms-http/cmtsMacDetail",
      cid:cid
    };
    return this.http.post(path, toFormData(json_Obj), {
      headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' }),
    })
  }
    // CM列表
    getCmListDatabase({cid,p_index}) {
      let path=environment.getPath()+'/tw-cmts-server/otherObject';
      var json_Obj={
        objectUrl:"hfc-cminfo/get_port_database_cm_list",
        cid:cid,
        p_index:p_index,
        pageIndex:0,
        pageSize:99999
      };
      return this.http.post(path, toFormData(json_Obj), {
        headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' }),
      })
    }
}
