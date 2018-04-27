import { BreadcrumbService } from './../../@theme/components/header/breadcrumb/breadcrumb.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equ-manage',
  templateUrl: './equ-manage.component.html',
  styleUrls: ['./equ-manage.component.scss']
})
export class EquManageComponent implements OnInit {

  constructor(
    private breadcrumb:BreadcrumbService
  ) { }

  ngOnInit() {
    // this.breadcrumb.set( [
    //     {name:'设备管理',link:'/pages/equ-manage'},
    //     {name:'CMTS',link:'/pages/equ-manage/cmts'},
    //   ])
  }

}
