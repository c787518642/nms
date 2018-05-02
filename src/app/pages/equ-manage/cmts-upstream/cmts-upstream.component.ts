import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from '../../../../ng2-smart-table';
import { CmtsService } from '../cmts/cmts.service';
import { Route, ActivatedRoute, Router } from '@angular/router';
import { BreadcrumbService } from '../../../@theme/components/header/breadcrumb/breadcrumb.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'tw-cmts-upstream',
  templateUrl: './cmts-upstream.component.html',
  styleUrls: ['./cmts-upstream.component.scss']
})
export class CmtsUpstreamComponent implements OnInit {
  title = "cmts";
  show_detial = false;
  pageIndex = 1;
  cid;
  pid

  constructor(
    private cmtsService: CmtsService,
    private route: ActivatedRoute,
    private router: Router,
    private breadcrumb: BreadcrumbService,

  ) { }

  ngOnInit() {
    this.route.url.subscribe(data => {
      this.title = data[0].path;
    })
    this.route.queryParamMap.subscribe((data) => {
      this.cid = data.get("cid")
      this.pid = data.get("pid")
      if (!this.pid) {
        this.breadcrumb.set([
          { name: this.title.toUpperCase(), link: `/pages/equ-manage/${this.title}` },
          // { name: '上行端口列表', link: `/pages/equ-manage/${this.title}/cmts-upstream`, queryParams: { cid: this.cid } }
          { name: '上行端口列表' }
        ]);
        this.show_detial = false;
      }
      else {
        this.breadcrumb.set([
          { name: this.title.toUpperCase(), link: '/pages/equ-manage/' + this.title },
          { name: '上行端口列表', link: `/pages/equ-manage/${this.title}/cmts-upstream`, queryParams: { cid: this.cid } },
          { name: '详情', link: `/pages/equ-manage/${this.title}/cmts-upstream`, queryParams: { cid: this.cid, pid: this.pid } }
        ]);
      }
    })

  }

  onUserRowSelect(data) {
    //   this.pageIndex = data.source.pagingConf.page;
    //   this.show_detial = true;
    //   this.pid = 1

    //   this.router.navigate(["/pages/equ-manage/cmts/cmts-upstream"], { queryParams: { cid: this.cid, pid: this.pid } })
  }
}
