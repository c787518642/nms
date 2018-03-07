// import { BreadcrumbService } from './breadcrumb.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

import { MENU_ITEMS } from './pages-menu';

@Component({
  selector: 'ngx-pages',
  templateUrl: './page.compoment.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {
  url;
  constructor(
    private router: Router,
    // private breadcrumb: BreadcrumbService
  ) { }
  ngOnInit() {

  }
 
  menu = MENU_ITEMS;
  // menu = [];

}
