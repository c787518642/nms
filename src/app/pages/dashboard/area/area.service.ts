import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class AreaService {

  constructor(private http:HttpClient) { }
  getNpavalues(){
    return this.http.post("/tw-cmts-server/login/npavalues",{})
  }
}
