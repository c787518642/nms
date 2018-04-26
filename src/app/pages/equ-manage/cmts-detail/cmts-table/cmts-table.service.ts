import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
@Injectable()
export class CmtsTableService {

  constructor(private http:HttpClient) { }
  getCmtsInfo(obj: { cid }){
    
    let path=environment.getPath()+'/tw-cmts-server/cmts/information';
    return this.http.post(path,toFormData(obj),{
      headers:new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'}),
    });
  }
}
