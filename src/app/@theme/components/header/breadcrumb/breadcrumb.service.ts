import { Injectable, EventEmitter, OnInit } from '@angular/core';

@Injectable()
export class BreadcrumbService {
  breadcrumb;
  last_breadcrumb
  public items = new EventEmitter();
  public last_item = new EventEmitter();
  constructor( ) {}
  set(x) {
   
    this.last_breadcrumb=x.pop();
    this.breadcrumb = x;
    this.items.emit(this.breadcrumb)
    this.last_item.emit(this.last_breadcrumb);
    // console.log(this.last_breadcrumb)
    // console.log(this.breadcrumb)
  }
 
}
