import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from './breadcrumb.service';
// import { BreadcrumbService } from './breadcrumb.service';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
  items
  constructor(
    private breadcrumb: BreadcrumbService,
  ) { 
    this.getItems()
  }
  getItems() {
    this.breadcrumb.items.subscribe(data => {
     
      this.items = data;
    })
  }
  ngOnInit() {
  }

}
