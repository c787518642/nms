import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from '../../../../ng2-smart-table';
import { CmtsService } from '../cmts/cmts.service';
import { Route, ActivatedRoute, Router } from '@angular/router';
import { BreadcrumbService } from '../../../@theme/components/header/breadcrumb/breadcrumb.service';

@Component({
  selector: 'tw-cmts-upstream',
  templateUrl: './cmts-upstream.component.html',
  styleUrls: ['./cmts-upstream.component.scss']
})
export class CmtsUpstreamComponent implements OnInit {
  public source = new LocalDataSource();
  settings: any = {
    // selectMode: 'multi',
    hideSubHeader: true,
    actions: { add: false, edit: false, delete: false },
    // pager:{
    //   perPage:50
    // },
    columns: {
      // index: { title: '序号', valuePrepareFunction: (s, row, cell) => { return cell.row.index + 1 } },
      p_name: { title: '名称', },
      status: {
        title: '状态', type: "html", valuePrepareFunction: (cell, row) => {
          if (cell) {
            return ` <i  class="fa fa-circle green" ></i> `
          } else {
            return ` <i class="fa fa-circle red" ></i>`
          }
        }
      },
      qam: { title: '调制方式' },
      snr: { title: 'SNR(dB)' },
      ber: { title: 'BER(%)' },
      npa: { title: 'NPA', type: "html", valuePrepareFunction: (cell, row) => { if (cell < 90) { return `<span class="text-danger">${cell}</span>` } else return cell } }
    }
  };
  settings_some: any = {
    hideSubHeader: true, actions: { add: false, edit: false, delete: false },
    columns: { p_name: { title: '名称', }, status: { title: '状态', type: "html", valuePrepareFunction: (cell, row) => { if (cell) { return ` <i  class="fa fa-circle green" ></i> ` } else { return ` <i class="fa fa-circle red" ></i>` } } }, }
  };
  show_detial = false;
  pageIndex = 1;
  cid;
  pid;

  constructor(
    private cmtsService: CmtsService,
    private route: ActivatedRoute,
    private router: Router,
    private breadcrumb: BreadcrumbService,

  ) { }

  ngOnInit() {
    this.route.queryParamMap.subscribe((data) => {
      document.getElementsByClassName("scrollable-container")[0].scrollTop = 0;
      this.cid = data.get("cid")
      this.pid = data.get("pid")
      this.getCmtsUpstreamList({ cid: this.cid })
      if (!this.pid) {
        this.breadcrumb.set([
          { name: '设备管理', link: '/pages/equ-manage' },
          { name: 'CMTS', link: '/pages/equ-manage/cmts' },
          { name: '上行端口列表', link: '/pages/equ-manage/cmts/cmts-upstream', queryParams: { cid: this.cid } }
        ]);
        this.show_detial = false;
      }
      else {
        this.breadcrumb.set([
          { name: '设备管理', link: '/pages/equ-manage' },
          { name: 'CMTS', link: '/pages/equ-manage/cmts' },
          { name: '上行端口列表', link: '/pages/equ-manage/cmts/cmts-upstream', queryParams: { cid: this.cid } },
          { name: '详情', link: '/pages/equ-manage/cmts/cmts-upstream', queryParams: { cid: this.cid, pid: this.pid } }
        ]);
      }
    })

  }
  getCmtsUpstreamList(obj) {

    this.cmtsService.getCmtsUpstreamList(obj).subscribe((data) => {
      if (data["code"] && data["code"] == 1) {
        this.source.load(data["data"]);
        this.source.setPage(this.pageIndex, false)
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
