import { BreadcrumbService } from './../../../@theme/components/header/breadcrumb/breadcrumb.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ToasterService } from 'angular2-toaster';

@Component({
  selector: 'tw-cable-modem',
  templateUrl: './cable-modem.component.html',
  styleUrls: ['./cable-modem.component.scss']
})
export class CableModemComponent implements OnInit {
  c_nickname;
  cid;
  title="cmts";
  constructor(
    private route:ActivatedRoute,
    private breadcrumbService:BreadcrumbService,
    private toasterService:ToasterService
  ) { }

  ngOnInit() {
    this.toasterService.popAsync({
      type: 'info',
      body: "CM列表 暂无",
      // timeout:8000
    });
    this.c_nickname=this.route.snapshot.queryParamMap.get("c_nickname")
    this.cid=this.route.snapshot.queryParamMap.get("cid");
    this.route.url.subscribe(data=>{
      this.title=data[0].path
      // console.log(data)
      switch (data[1].path){
        case "cmts-upstream":{
          this.breadcrumbService.set([
            { name: this.title.toUpperCase(), link: `/pages/equ-manage/${this.title}` },
            { name: '上行端口列表', link: `/pages/equ-manage/${this.title}/cmts-upstream`, queryParams: { cid: this.cid } },
            { name:  "CM"},
          ])
          break
        }
        case "mac-domain-port":{
          this.breadcrumbService.set([
            { name: this.title.toUpperCase(), link: `/pages/equ-manage/${this.title}` },
            { name: 'MAC域', link: `/pages/equ-manage/${this.title}/mac-domain`, queryParams: { cid: this.cid ,c_nickname:this.c_nickname} },
            { name:  "端口", link: `/pages/equ-manage/${this.title}/port`, queryParams: { cid: this.cid ,c_nickname:this.c_nickname}},
            { name:  "CM"},
          ])
          break
        }
        case "mac-domain":{
          this.breadcrumbService.set([
            { name: this.title.toUpperCase(), link: `/pages/equ-manage/${this.title}` },
            { name: 'MAC域', link: `/pages/equ-manage/${this.title}/mac-domain`, queryParams: { cid: this.cid ,c_nickname:this.c_nickname} },
            { name:  "CM"},
          ])
          break
        }
      }
      
    })
 
  }

}
