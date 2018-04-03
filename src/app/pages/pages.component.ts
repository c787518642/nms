// import { BreadcrumbService } from './breadcrumb.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

import { MENU_ITEMS } from './pages-menu';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'ngx-pages',
  templateUrl: './page.compoment.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {
  url;
  b = "";
  constructor(
    private router: Router,
    // private breadcrumb: BreadcrumbService,
    private http: HttpClient
  ) { }
  ngOnInit() {
  }
  // chai token
  // onclick() {
  //   this.http.post("/tw-cmts-server/b", toFormData({ b: this.b }), {
  //     observe: 'response',
  //     headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' }),
  //   }).subscribe((resp) => {
  //     this.b = resp.headers.get("b")
  //     console.log(resp.body)
  //   })
  // }
  menu = MENU_ITEMS;
  // menu = [];

}
