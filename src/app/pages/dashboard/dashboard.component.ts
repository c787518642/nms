import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from '../../@theme/components/header/breadcrumb/breadcrumb.service';
import { StatusCardService } from './status-card/status-card.service';

@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit{
  device_count:any[];
  constructor(
    private breadcrumb:BreadcrumbService,
    private statusCardService:StatusCardService
  ){}
  ngOnInit(){
    this.device_count=this.statusCardService.get()
    this.breadcrumb.set( [
      {name:'工作台',link:'./'},
    ])
  }
  
}
