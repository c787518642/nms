import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BreadcrumbService } from '../@theme/components/header/breadcrumb/breadcrumb.service';
import { environment } from '../../environments/environment';
@Injectable()
export class LoginService {

  constructor(
    private http:HttpClient,
    private breadcrumb:BreadcrumbService,
   
  ) { }
  login(obj){
    this.breadcrumb.set([{name:'主面板',link:'./'}]);
    
    let path=environment.getPath()+'/tw-cmts-server/login/login_info';
    console.log(path)
    return this.http.post(path,toFormData(obj),{
      headers:new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'}),
    });
    // 
    // setTimeout(()=>{
    //   return ({code:'1'});
    // } , 2000)
  }
  logout(){
    return this.http.post("/tw-cmts-server/login/cancel",{})
  }
}
