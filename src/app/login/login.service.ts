import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BreadcrumbService } from '../@theme/components/header/breadcrumb/breadcrumb.service';

@Injectable()
export class LoginService {

  constructor(
    private http:HttpClient,
    private breadcrumb:BreadcrumbService
  ) { }
  login(obj){
    this.breadcrumb.set([{name:'主面板',link:'./'}])
    console.log(obj)
    // return this.http.post('http://jsonplaceholder.typicode.com/posts',{});
    return this.http.post('/tw-cmts-server/login/login_info',obj);
    // setTimeout(()=>{
    //   return ({code:'1'});
    // } , 2000)
  }
}
