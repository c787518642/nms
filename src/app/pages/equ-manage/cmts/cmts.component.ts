import { Component, OnInit, EventEmitter } from '@angular/core';
import { CmtsService } from './cmts.service';
import { LocalDataSource } from '../../../../ng2-smart-table';
import { CmtsListTableSnmpComponent } from './cmts-list-table-snmp/cmts-list-table-snmp.component';

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
      c_nickname: { title: 'CMTS', },
      snmpStatus: { title: 'SNMP 状态', type: "custom", renderComponent: CmtsListTableSnmpComponent },
      npa_avg: { title: 'NPA', },
      cm_online: { title: '在线率', }
    }
  };
  settings_bat = this.settings;
  cmts_info;
  hide_colunms = false

  ww = this.windowWidth()

  cmts_style = 'col-md-12';
  showDetail=false
  widthLower = true;
  constructor(
    private cmtsService: CmtsService
  ) { }
  ngOnInit() {
    this.getCmtsList();
  }
  getCmtsList() {
    this.cmtsService.getCmtsList().subscribe(data => {
      if (data["code"] && data["code"] == 1) {
        this.source.load(data["data"]);
      }
    })
  }
  showCmtsDetail() {
    // this.show_detail = !this.show_detail;
    // this.cmts_style = !this.show_detail ? 'col-md-12' : 'col-md-12 col-lg-4';
    this.cmts_style = 'col-md-12 col-lg-4'
  }
  hideCmtsDetail() {
    this.cmts_style = 'col-md-12'
  }
  //  当用户点击某一行
  onUserRowSelect(data) {
    this.cmts_info = JSON.stringify(data.data['c_nickname']);
    this.hideSomeColunms()
    this.showCmtsDetail()
    this.showDetail=true
  }
  closeDetail() {
    this.hideCmtsDetail();
    this.showSomeColunms();
    this.showDetail=false;
  }
  ngAfterContentChecked() {
    // 动态判断显示列
    const widthValue = 867;
    this.ww = this.windowWidth();
    // if没有隐藏and宽度小于阈值=>隐藏
    if (!this.hide_colunms && this.ww < widthValue) {
      this.hide_colunms = true;
      this.hideSomeColunms()
      // if隐藏了and宽度大于阈值=>显示
    } else if (this.hide_colunms && !this.showDetail&& this.ww > widthValue) {
      this.hide_colunms = false;
      this.showSomeColunms()
    }
    this.widthLower=this.ww<992?false:true
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
