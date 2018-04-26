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
      up_rate: { title: '利用率(%)'},
      in_max: { title: '最大速率(Mbps)' },
    }
  };
  settings_some: any = {
    hideSubHeader: true,
    actions: { add: false, edit: false, delete: false },
    columns: {
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
    }
  }
  constructor(
    private cmtsService: CmtsService,
    private route: ActivatedRoute,
    private breadcrumb: BreadcrumbService,
  ) { }

  ngOnInit() {
    this.route.url.subscribe(data=>{
      this.title=data[0].path;
    })
    this.route.queryParamMap.subscribe((data) => {
      let cid = data.get("cid")
      this.getCmtsDownstreamList({ cid: cid });
      this.breadcrumb.set([
        { name: '设备管理', link: '/pages/equ-manage' },
        { name: this.title.toUpperCase(), link: `/pages/equ-manage/${this.title}`},
        { name: '下行端口列表', link: `/pages/equ-manage/${this.title}/cmts-downstream`, queryParams: { cid: cid } }
      ]);
    })
  }
  getCmtsDownstreamList(obj) {
    this.cmtsService.getCmtsDownstreamList(obj).subscribe((data) => {
      if (data["code"] && data["code"] == 1) {
        this.source.load(data["data"])
      }

    })
  }
  onUserRowSelect(data) {

  }
}
