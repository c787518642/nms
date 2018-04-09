import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { environment } from '../../../../environments/environment';
@Injectable()
export class SnrService {

  constructor(private http:HttpClient) { }
  getSnr(){
    let path=environment.getPath()+'/tw-cmts-server/otherObject';
    var json_Obj={
      objectUrl:"tw-nms-cmts-server/upSnrPieReport"
    };
    return this.http.post(path,toFormData(json_Obj),{
      headers:new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'}),
    });
  }

  getSnrLine(){
    let path=environment.getPath()+'/tw-cmts-server/otherObject';
    var json_Obj={
      objectUrl:"tw-nms-cmts-server/upSnrHisReport"
    };
    return this.http.post(path,toFormData(json_Obj),{
      headers:new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'}),
    });
  }
}
