import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class SearchAllService {

  constructor() { }
  show=false;
  show_search=new EventEmitter();
  toggle(){
    this.show=!this.show
    this.show_search.emit(this.show)
  }
}
