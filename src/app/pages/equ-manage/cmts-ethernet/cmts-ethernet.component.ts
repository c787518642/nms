import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from '../../../../ng2-smart-table';
import { ActivatedRoute } from '@angular/router';
import { CmtsService } from '../cmts/cmts.service';
import { BreadcrumbService } from '../../../@theme/components/header/breadcrumb/breadcrumb.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'tw-cmts-ethernet',
  templateUrl: './cmts-ethernet.component.html',
  styleUrls: ['./cmts-ethernet.component.scss']
})
export class CmtsEthernetComponent implements OnInit {
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
      run_status: {
        title: '运行状态', type: "html", valuePrepareFunction: (cell, row) => {
          if (cell) {
            return ` <i  class="fa fa-circle green" ></i> `
          } else {
            return ` <i class="fa fa-circle red" ></i>`
          }
        }
      },
      cm_max_up: { title: '最大输入速率(Mbps)' },
      cm_max_dow: { title: '最大输出速率(Mbps)' },
      up_rate: { title: '输入利用率(%)' },
      out_rate: { title: '输出利用率(%)'}
    }
  };
  settings_some: any = {
    // selectMode: 'multi',
    hideSubHeader: true,
    actions: { add: false, edit: false, delete: false },
    columns: {
      p_name: { title: '名称', },
      status: {
        title: '运行状态', type: "html", valuePrepareFunction: (cell, row) => {
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
   
    this.route.queryParamMap.subscribe((data) => {
      let cid = data.get("cid")
      this.getCmtsEthernetList({ cid: cid });
      this.breadcrumb.set([
        { name: '设备管理', link: '/pages/equ-manage' },
        { name: 'CMTS', link: '/pages/equ-manage/cmts' },
        { name: '上联口列表', link: '/pages/equ-manage/cmts/cmts-ethernet', queryParams: { cid: cid } }
      ]);
    })

  }
  getCmtsEthernetList(obj) {
    this.cmtsService.getCmtsEthernetList(obj).subscribe((data) => {
      if (data["code"] && data["code"] == 1) {
        this.source.load(data["data"])
      }

    })
  }
  onUserRowSelect(data) {
    
  }
}
