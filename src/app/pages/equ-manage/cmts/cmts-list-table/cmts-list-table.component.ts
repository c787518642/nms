import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { CmtsListTableSnmpComponent } from './cmts-list-table-snmp/cmts-list-table-snmp.component';
import { CmtsService } from '../cmts.service';
import { LocalDataSource } from '../../../../../assets/vendors/ng2-smart-table';

@Component({
  selector: 'tw-cmts-list-table',
  templateUrl: './cmts-list-table.component.html',
  styleUrls: ['./cmts-list-table.component.scss']
})
export class CmtsListTableComponent implements OnInit {
 
  public source: LocalDataSource;
  settings:any= {
    hideSubHeader: true,
    actions: {
      add: false,
      edit: false,
      delete: false
    },
    columns: {
      // index: {
      //   title: '序号',
      //   valuePrepareFunction: (s, row, cell) => {
      //     return cell.row.index + 1
      //   }
      // },
      com: {
        title: '公司',
      },
      hub: {
        title: '机房',
      },
      cmts: {
        title: 'CMTS',
      },
      snmp: {
        title: 'SNMP 状态',
        type: "custom",
        renderComponent: CmtsListTableSnmpComponent
      },
      npa: {
        title: 'NPA',
      },
      online: {
        title: '在线率',
      }
    }
  };
  data = [
    {
      com: 1,
      hub: "罗湖",
      cmts: "Bret",
      npa: "Sincere @april.biz",
      snmp: 0,
      online: "10%"
    },
    {
      com: 1,
      hub: "福田",
      cmts: "Bret",
      npa: "Sincere @april.biz",
      snmp: 1,
      online: "12%"
    },

    // ... list of items

    {
      com: 1,
      hub: "南山",
      cmts: "Bret",
      npa: "Sincere @april.biz",
      snmp: 2,
      online: "30%"
    }
  ];
  show_detail = false;
  settings_bat= this.settings
  constructor(
    private cmtsService:CmtsService
  ) {
    this.source = new LocalDataSource(this.data);
  }

  ngOnInit(

  ) {

  }
  onUserRowSelect(event) {
    // this.cmtsService.emitter.emit("222")
    // // 隐藏部分表格列
    // if (this.show_detail) {
    //   this.settings = Object.assign({}, this.settings_bat);
    // } else {
    //   let newSetting = {
    //     hideSubHeader: true, actions: { add: false, edit: false, delete: false },
    //     columns: { hub: { title: '机房', }, cmts: { title: 'CMTS', }, snmp: {title: 'SNMP 状态', type: "custom",renderComponent: CmtsListTableSnmpComponent},}
    //   };
    //   this.settings = Object.assign({}, newSetting)
    // }
    // this.show_detail = !this.show_detail;
  }
}
