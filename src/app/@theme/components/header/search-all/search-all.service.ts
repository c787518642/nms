import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class SearchAllService {

  constructor(
    private http:HttpClient
  ) { }
  show=false;
  show_search=new EventEmitter();
  toggle(){
    this.show=!this.show
    this.show_search.emit(this.show)
  }
  getHistory(){
    return JSON.parse(localStorage.getItem("searchHistory"))||[]
  }
  search(obj){
    let path=environment.getPath()+'/tw-cmts-server/pulldown/get_device_all';
    return this.http.post(path,toFormData(obj),{
      headers:new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'}),
    });
  }
}
