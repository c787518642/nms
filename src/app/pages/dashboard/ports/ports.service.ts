import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class PortsService {

  constructor(private http:HttpClient) { }
  getState(){
    return this.http.post("/tw-cmts-server//login/state",{})
  }

}
