import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CmtsService {

  constructor(
    private http:HttpClient
  ) { }
  getCmtsList(){
    return this.http.post("",{})
  }
}
