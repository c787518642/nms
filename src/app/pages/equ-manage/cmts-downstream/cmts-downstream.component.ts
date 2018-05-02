import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from '../../../../ng2-smart-table';
import { ActivatedRoute } from '@angular/router';
import { CmtsService } from '../cmts/cmts.service';
import { BreadcrumbService } from '../../../@theme/components/header/breadcrumb/breadcrumb.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'tw-cmts-downstream',
  templateUrl: './cmts-downstream.component.html',
  styleUrls: ['./cmts-downstream.component.scss']
})
export class CmtsDownstreamComponent implements OnInit {
  title="cmts"
  
  constructor(
    private cmtsService: CmtsService,
    private route: ActivatedRoute,
    private breadcrumb: BreadcrumbService,
  ) { }

  ngOnInit() {
    this.route.url.subscribe(data=>{
      this.title=data[0].path;
    })
    this.breadcrumb.set([
      { name: this.title.toUpperCase(), link: `/pages/equ-manage/${this.title}`},
      // { name: '下行端口列表', link: `/pages/equ-manage/${this.title}/cmts-downstream`, queryParams: { cid: cid } }
      { name: '下行端口列表' }
    ]);
  }
 
  onUserRowSelect(data) {

  }
}
