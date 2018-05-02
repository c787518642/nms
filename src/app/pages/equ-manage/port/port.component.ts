import { BreadcrumbService } from './../../../@theme/components/header/breadcrumb/breadcrumb.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tw-port',
  templateUrl: './port.component.html',
  styleUrls: ['./port.component.scss']
})
export class PortComponent implements OnInit {
  c_nickname;
  cid;
  title
  constructor(
    private route:ActivatedRoute,
    private breadcrumbService:BreadcrumbService
  ) { }

  ngOnInit() {
    this.route.url.subscribe(data=>{
      this.title=data[0].path
    })
    this.c_nickname=this.route.snapshot.queryParamMap.get("c_nickname")
    this.cid=this.route.snapshot.queryParamMap.get("cid");
    this.breadcrumbService.set([
      { name: this.title.toUpperCase(), link: `/pages/equ-manage/${this.title}` },
      { name: 'MAC域', link: `/pages/equ-manage/${this.title}/mac-domain`, queryParams: { cid: this.cid ,c_nickname:this.c_nickname} },
      { name:  "端口"},
    ])
  }

}
