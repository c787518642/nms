import { Injectable } from '@angular/core';

@Injectable()
export class StatusCardService {

  constructor() { }
  deviceCount=[{
    name:'hub',
    count:40,
    color:"purple"
  },{
    name:'cmts',
    count:40,
    color:"green"
  },{
    name:'dcmts',
    count:140,
    color:"blue"
  },{
    name:'op',
    count:4000,
    color:"orange"
  }];
  get(){
    return this.deviceCount
  }
}
