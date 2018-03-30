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
      // index: { title: '序号', valuePrepareFunction: (s, row, cell) => { return cell.row.index + 1 } },
      company_name: { title: '公司', },
      sr_name: { title: '机房', },
      c_nickname: { title: 'CMTS'},
      snmpStatus: { title: 'SNMP 状态', type: "custom", renderComponent: CmtsListTableSnmpComponent },
      npa_avg: { title: 'NPA',type: "html",valuePrepareFunction:(cell,row)=>{ if(cell<90) {return `<span class="text-danger">${cell}</span>` }else return cell} },
      cm_online: { title: '在线率',valuePrepareFunction:(cell,row)=>{return (cell*100).toFixed(0)+"%"}   }
    }
  };
  settings_bat = this.settings;
  cmts_info;
  hide_colunms = false
  ww = this.windowWidth()

  cmts_style = 'col-md-12';
  showDetail = false
  widthLower = true;
  constructor(
    private breadcrumb: BreadcrumbService,
    private cmtsService: CmtsService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }
  ngOnInit() {
    this.getCmtsList();
    this.activatedRoute.queryParamMap.subscribe(data => {
      if (!data.get("cid")) {
        this.closeDetail();
        this.hide_colunms = false;
        this.breadcrumb.set([{
          name: '设备管理', link: '/pages/equ-manage'
        }, {
          name: 'CMTS', link: '/pages/equ-manage/cmts'
        },
        ]);
      }
    })
  }

  getCmtsList() {
    this.cmtsService.getCmtsList().subscribe(data => {
      if (data["code"] && data["code"] == 1) {
        this.source.load(data["data"]);
      }
    })
  }
  onSearch(query: string = '') {

    if (!query) {
      this.source.setFilter([])
      return
    }
    console.log(!query)
    this.source.setFilter([
      { field: 'company_name', search: query },
      { field: 'sr_name', search: query },
      { field: 'c_nickname', search: query }
    ], false);
    // second parameter specifying whether to perform 'AND' or 'OR' search 
    // (meaning all columns should contain search query or at least one)
    // 'AND' by default, so changing to 'OR' by setting false here
  }
  showCmtsDetail(data?) {
    // this.show_detail = !this.show_detail;
    // this.cmts_style = !this.show_detail ? 'col-md-12' : 'col-md-12 col-lg-4';
    this.cmts_style = 'col-md-12 col-lg-4';
    this.showDetail = true;
    let scroll = document.getElementsByClassName("scrollable-container")[0]
    scroll.scrollTop = 0;
    this.breadcrumb.set([
      { name: '设备管理', link: '/pages/equ-manage' },
      { name: 'CMTS', link: '/pages/equ-manage/cmts' },
      { name: '详情', link: '/pages/equ-manage/cmts', queryParams: { cid: data.data['cid'] } }
    ]);
    this.router.navigate(["pages/equ-manage/cmts"], { queryParams: { cid: data.data['cid'] } })

  }
  hideCmtsDetail() {
    this.cmts_style = 'col-md-12';
    this.showDetail = false;
    if (this.ww < 867) { this.hideSomeColunms() }
    let scroll = document.getElementsByClassName("scrollable-container")[0]
    scroll.scrollTop = 0
  }
  //  当用户点击某一行
  onUserRowSelect(data) {
    this.hideSomeColunms()
    this.showCmtsDetail(data)
  }
  closeDetail() {
    this.hideCmtsDetail();
    this.showSomeColunms();
  }
  ngAfterContentChecked() {

    // 动态判断显示列
    const widthValue = 867;
    this.ww = this.windowWidth();
    console.log()
    // if没有隐藏and宽度小于阈值=>隐藏
    if (!this.hide_colunms && this.ww < widthValue) {

      this.hide_colunms = true; this.hideSomeColunms()
      // if隐藏了and宽度大于阈值=>显示
    } else if (this.hide_colunms && !this.showDetail && this.ww > widthValue) {
      this.hide_colunms = false; this.showSomeColunms()
    }
    this.widthLower = this.ww < 992 ? false : true
  }

  windowWidth() {
    var de = document.documentElement;
    return self.innerWidth || (de && de.clientWidth) || document.body.clientWidth;
  }

  hideSomeColunms() {
    let newSetting = {
      hideSubHeader: true, actions: { add: false, edit: false, delete: false },
      columns: { c_nickname: { title: 'CMTS', }, snmpStatus: { title: 'SNMP 状态', type: "custom", renderComponent: CmtsListTableSnmpComponent }, }
    };
    this.settings = Object.assign({}, newSetting)
  }
  showSomeColunms() {
    this.settings = Object.assign({}, this.settings_bat);
  }
}
