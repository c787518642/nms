import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { environment } from '../../../../environments/environment';
@Injectable()
export class UpstreamService {

  constructor(private http:HttpClient) { }
  getUpPie(){
    let path=environment.getPath()+'/tw-cmts-server/otherObject';
    var json_Obj={
      objectUrl:"tw-nms-cmts-server/cmHisQueryPie"
    };
    return this.http.post(path,toFormData(json_Obj),{
      headers:new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'}),
    });
  }

  getUpLine(fromTime,toTime){
    let path=environment.getPath()+'/tw-cmts-server/otherObject';
    var json_Obj={
      objectUrl:"tw-nms-cmts-server/cmHisQueryCurve",
      fromTime:fromTime,
      toTime:toTime
    };
    return this.http.post(path,toFormData(json_Obj),{
      headers:new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'}),
    });
  }

}
