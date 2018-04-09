import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class NpaService {

  constructor(private http:HttpClient) { }
  getStatistical(){
    return this.http.post("/tw-cmts-server/login/statistical",{})
  }

}
