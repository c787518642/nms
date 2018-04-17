import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class DetailNumService {

  constructor(private http:HttpClient) { }
  getNum(){
    return this.http.post("/tw-cmts-server/login/network_trends",{})
  }
}
