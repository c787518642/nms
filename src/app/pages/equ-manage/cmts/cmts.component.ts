import { environment } from './../../../../environments/environment';
import { Component, OnInit, EventEmitter } from '@angular/core';
import { CmtsService } from './cmts.service';
import { LocalDataSource } from '../../../../ng2-smart-table';
import { CmtsListTableSnmpComponent } from './cmts-list-table-snmp/cmts-list-table-snmp.component';
import { BreadcrumbService } from '../../../@theme/components/header/breadcrumb/breadcrumb.service';
import { Router, ActivatedRoute } from '@angular/router';
import { query } from '@angular/animations';

@Component({
  selector: 'app-cmts',
  templateUrl: './cmts.component.html',
  styleUrls: ['./cmts.component.scss']
})
export class CmtsComponent implements OnInit {
  public source = new LocalDataSource();
  settings: any = {
    // selectMode: 'multi',
    hideSubHeader: true,
    actions: { add: false, edit: false, delete: false },
    columns: {
      // index: { title: '序号', valuePrepareFunction: (cell, row ) => { return cell.row.index + 1 } },
      company_name: { title: '公司', },
      sr_name: { title: '机房', },
      c_nickname: { title: 'CMTS' },
      snmpStatus: { title: 'SNMP 状态', type: "custom", renderComponent: CmtsListTableSnmpComponent },
      npa_avg: { title: 'NPA', type: "html", valuePrepareFunction: (cell, row) => { if (cell < 90) { return `<span class="text-danger">${cell}</span>` } else return cell } },
      cm_online: { title: '在线率(%)', valuePrepareFunction: (cell, row) => { return (cell * 100).toFixed(0) } }
    }
  };
  settings_some = {
    hideSubHeader: true, actions: { add: false, edit: false, delete: false },
    columns: { c_nickname: { title: 'CMTS', }, snmpStatus: { title: 'SNMP 状态', type: "custom", renderComponent: CmtsListTableSnmpComponent }, }
  };
  cid;
  pageIndex = 1;
  showDetail = false;

  constructor(
    private breadcrumb: BreadcrumbService,
    private cmtsService: CmtsService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.queryParamMap.subscribe(data => {
      this.getCmtsList();
      document.getElementsByClassName("scrollable-container")[0].scrollTop = 0;
      this.cid = data.get("cid")
      if (!this.cid) {
        this.showDetail = false;
        this.breadcrumb.set([
          { name: '设备管理', link: '/pages/equ-manage' },
          { name: 'CMTS', link: '/pages/equ-manage/cmts' }
        ]);
      } else {
        this.showDetail = true;
        this.breadcrumb.set([
          { name: '设备管理', link: '/pages/equ-manage' },
          { name: 'CMTS', link: '/pages/equ-manage/cmts' },
          { name: '详情', link: '/pages/equ-manage/cmts', queryParams: { cid: this.cid } }
        ]);
      }
    })
  }

  // 筛选框
  onSearch(query: string = '') {
    if (!query) { this.source.setFilter([]); return }
    this.source.setFilter([
      { field: 'company_name', search: query },
      { field: 'sr_name', search: query },
      { field: 'c_nickname', search: query }
    ], false);
  }

  //  当用户点击某一行
  onUserRowSelect(data) {
    this.pageIndex = data.source.pagingConf.page;
    this.showDetail = true;
    this.cid = data.data['cid'];
    this.router.navigate(["/pages/equ-manage/cmts"], { queryParams: { cid: this.cid } })
  }

  getCmtsList() {
    this.cmtsService.getCmtsList().subscribe(data => {
      if (data["code"] && data["code"] == 1) {
        this.source.load(data["data"]);
        this.source.setPage(this.pageIndex, false)
      }
    })
  }
}
