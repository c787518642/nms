import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { environment } from '../../../../environments/environment';
@Injectable()
export class CollectionService {

  constructor(private http:HttpClient) { }
  getCollection(){
    let path=environment.getPath()+'/tw-cmts-server/otherObject';
    var json_Obj={
      name:"1112",pwd:"xxx"
    };
    return this.http.post(path,toFormData(json_Obj),{
      headers:new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'}),
    });
  }
}
