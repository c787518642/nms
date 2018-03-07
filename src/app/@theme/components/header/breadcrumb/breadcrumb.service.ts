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
}
