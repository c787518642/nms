import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class NetworkService {

  constructor(private http:HttpClient) { }
  getNetwork(){
    return this.http.post("/tw-cmts-server/login/network_trends",{})
  }
}
