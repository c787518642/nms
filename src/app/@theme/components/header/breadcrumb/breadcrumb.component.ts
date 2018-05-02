import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from './breadcrumb.service';
// import { BreadcrumbService } from './breadcrumb.service';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
  items;
  last_item:{name};
  constructor(
    private breadcrumb: BreadcrumbService,
    private location:Location
  ) { 

    this.breadcrumb.items.subscribe(data => {
      this.items = data;
      // console.log(this.items)
    })
    this.breadcrumb.last_item.subscribe(data=>{
      this.last_item=data;
      // console.log("last_item",this.last_item)
    })
  }
  getItems() {
   
  }
  ngOnInit() {
  }
  back(){
    this.location.back();
  }
}
