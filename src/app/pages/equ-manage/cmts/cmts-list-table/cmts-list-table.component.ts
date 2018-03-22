import { Component, OnInit } from '@angular/core';
import { CmtsListTableSnmpComponent } from './cmts-list-table-snmp/cmts-list-table-snmp.component';

@Component({
  selector: 'tw-cmts-list-table',
  templateUrl: './cmts-list-table.component.html',
  styleUrls: ['./cmts-list-table.component.scss']
})
export class CmtsListTableComponent implements OnInit {
  settings = {
   
    actions:{
      add:false,
      edit:false,
      delete:false
    },
    
    columns: {
      com: {
        title: '公司',
        filter:false,
      },
      hub: {
        title: '机房',
        filter:false
      },
      cmts: {
        title: 'CMTS',
        filter:false
      },
      snmp: {
        title: 'SNMP状态',
        filter:false,
        type:"custom",
        renderComponent:CmtsListTableSnmpComponent
      },
      npa: {
        title: 'NPA',
        filter:false
      },
      online: {
        title: '在线率',
        filter:false
      }
    }
  };
  data = [
    {
      com: 1,
      hub: "撒大苏 打改 价哦i窘 境而将 其评为进 去我怕",
      cmts: "Bret",
      npa: "Sincere @april.biz",
      snmp:0,
      online:"10%"
    },
    {
      com: 1,
      hub: "撒大苏 打改 价哦i窘 境而将 其评为进 去我怕",
      cmts: "Bret",
      npa: "Sincere @april.biz",
      snmp:1,
      online:"12%"
    },
    
    // ... list of items
    
    {
      com: 1,
      hub: "撒大苏 打改 价哦i窘 境而将 其评为进 去我怕",
      cmts: "Bret",
      npa: "Sincere @april.biz",
      snmp:2,
      online:"30%"
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
