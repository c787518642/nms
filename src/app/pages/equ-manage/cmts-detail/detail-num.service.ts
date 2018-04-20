import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
@Injectable()
export class DetailNumService {
  public a=new EventEmitter()
  constructor(private http:HttpClient) { }
  getCmtsInfoNum(){
    let url=window.location.href;
    let Url=url.split("=");
    let cid=Url[1];
    let path=environment.getPath()+'/tw-cmts-server/cmts/cmts_info_forId';
    var json_Obj={
      cid:cid
    };
    return this.http.post(path,toFormData(json_Obj),{
      headers:new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'}),
    });
  }
}
