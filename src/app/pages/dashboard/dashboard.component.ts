import { Component, OnInit ,EventEmitter} from '@angular/core';
import { BreadcrumbService } from '../../@theme/components/header/breadcrumb/breadcrumb.service';
import { StatusCardService } from './status-card/status-card.service';

@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit{
  device_count:any[];
  //数据的默认值
  device_data={
    room:30,
    cmts:40,
    dcmts:50,
    fs:3000
  };
  code:any;
  constructor(
    private breadcrumb:BreadcrumbService,
    private statusCardService:StatusCardService
  ){}
  ngOnInit(){
    this.statusCardService.getWlzy().subscribe(response => {
       this.code=response["code"];
       if(this.code==1){
         
         this.device_data=response['data'];
       }
       
    })
    this.device_count=this.statusCardService.get()
    this.breadcrumb.set( [
      {name:'工作台',link:'./'},
    ])
  }
}
