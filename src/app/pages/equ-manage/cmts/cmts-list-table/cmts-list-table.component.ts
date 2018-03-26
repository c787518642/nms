import { Component, OnInit } from '@angular/core';
import { CmtsListTableSnmpComponent } from './cmts-list-table-snmp/cmts-list-table-snmp.component';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'tw-cmts-list-table',
  templateUrl: './cmts-list-table.component.html',
  styleUrls: ['./cmts-list-table.component.scss']
})
export class CmtsListTableComponent implements OnInit {
  private source:LocalDataSource;
  settings = {
    hideSubHeader:true,
    actions: {
      add: false,
      edit: false,
      delete: false
    },
    columns: {
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
 
  constructor() { 
    this.source = new LocalDataSource(this.data);
  }

  ngOnInit(
    
  ) {
  }
  onUserRowSelect(event){
    this.source.append( {
      com: 1,
      hub: "南山",
      cmts: "Bret",
      npa: "Sincere @april.biz",
      snmp: 2,
      online: "30%"
    })
    console.log()
    // if(event.data.hub){
    //   // console.log(event.data.hub);
    this.settings.columns["sss"]={title:"xxxx"};
      // delete this.settings.columns.npa
      // delete this.settings.columns.snmp;
    //   // console.log(this.settings)
    // }
  }
}
