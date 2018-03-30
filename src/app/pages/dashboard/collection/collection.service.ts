import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class CollectionService {

  constructor(private http:HttpClient) { }
  getCollection(){
    return this.http.post("/tw-nms-cmts-server/homeCmtsCollectStatistics",{})
  }
}
