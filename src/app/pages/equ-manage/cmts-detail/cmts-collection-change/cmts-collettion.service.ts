import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
@Injectable()
export class CmtsCollettionService {

  constructor(private http:HttpClient) { }
  getCmtsCollection(){
    let url=window.location.href;
    let Url=url.split("=");
    let cid=Url[1];
    let path=environment.getPath()+'/tw-cmts-server/cmts/cmts_historical_change';
    var json_Obj={
      cid:cid
    };
    return this.http.post(path,toFormData(json_Obj),{
      headers:new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'}),
    });
  }
}
