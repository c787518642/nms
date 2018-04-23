import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
@Injectable()
export class DetailNumService {
  public a=new EventEmitter()
  constructor(private http:HttpClient) { }
  getCmtsInfoNum(obj: { cid }){
   
    let path=environment.getPath()+'/tw-cmts-server/cmts/cmts_info_forId';
    return this.http.post(path,toFormData(obj),{
      headers:new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'}),
    });
  }
}
