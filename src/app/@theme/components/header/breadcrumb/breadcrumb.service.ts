import { Injectable, EventEmitter, OnInit } from '@angular/core';

@Injectable()
export class BreadcrumbService {
  breadcrumb;
  public items = new EventEmitter()
  constructor( ) {}
  set(x) {
    this.breadcrumb = x;
    this.items.emit(this.breadcrumb)
  }
  add(x){
    this.items.emit([...this.breadcrumb,...x]);
  }
  back(){
    this.breadcrumb.pop()
    this.items.emit( this.breadcrumb);
  }
}
