import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
@Injectable()
export class DetailChartsService {

  constructor(private http:HttpClient) { }
  //ping丢包率和延时
  getCmtsPingChart(obj: { cid,day_len}){
    let path=environment.getPath()+'/tw-cmts-server/cmts/dbdayAndYsday';
    return this.http.post(path,toFormData(obj),{
      headers:new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'}),
    });
  }
  //内存利用率
  getCmtsMemChart(obj: { cid,day_len}){
    let path=environment.getPath()+'/tw-cmts-server/cmts/get_cpumem';
    return this.http.post(path,toFormData(obj),{
      headers:new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'}),
    });
  }
  //温度变化
  getCmtsTemp(obj: { cid,day_len}){
    let path=environment.getPath()+'/tw-cmts-server/cmts/get_temp';
    return this.http.post(path,toFormData(obj),{
      headers:new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'}),
    });
  }
  //CMTS CM在线数
  getCmtsCmOnline(obj: { cid,day_len}){
    let path=environment.getPath()+'/tw-cmts-server/cmts/get_cmts_cmnumchart';
    return this.http.post(path,toFormData(obj),{
      headers:new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'}),
    });
  }
   //设备流量
   getCmtsFlow(obj: { cid,day_len}){
    let path=environment.getPath()+'/tw-cmts-server/cmts/get_cmts_flowchart';
    return this.http.post(path,toFormData(obj),{
      headers:new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'}),
    });
  }
  //NPA
  getCmtsNpa(obj: { cid,day_len}){
    let path=environment.getPath()+'/tw-cmts-server/cmts/get_cmts_npachart';
    return this.http.post(path,toFormData(obj),{
      headers:new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'}),
    });
  }

}
