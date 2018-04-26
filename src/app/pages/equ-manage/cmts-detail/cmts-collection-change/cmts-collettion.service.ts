import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
@Injectable()
export class CmtsCollettionService {

  constructor(private http:HttpClient) { }
  getCmtsCollection(obj: { cid }){
   
    let path=environment.getPath()+'/tw-cmts-server/cmts/cmts_historical_change';
    return this.http.post(path,toFormData(obj),{
      headers:new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'}),
    });
  }
}
