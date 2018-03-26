import { Component, OnInit } from '@angular/core';
import { CmtsListTableSnmpComponent } from './cmts-list-table-snmp/cmts-list-table-snmp.component';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'tw-cmts-list-table',
  templateUrl: './cmts-list-table.component.html',
  styleUrls: ['./cmts-list-table.component.scss']
})
export class CmtsListTableComponent implements OnInit {
  public source:LocalDataSource;
  settings = {
    hideSubHeader:true,
    actions: {
      add: false,
      edit: false,
      delete: false
    },
    columns: {
      index: {
        title: '序号',
        valuePrepareFunction:(s,row,cell)=>{
          // console.log("cell",cell)
          console.log(row);
          return cell.row.index+1
       
          // console.log(s)
        }
      },
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
        class:"npa"
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
    // console.log(this.source)
  }

  ngOnInit(
    
  ) {
  }
  onUserRowSelect(event){
    console.log(event)
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
      // delete this.settings.columns.npa
      // delete this.settings.columns.snmp;
    //   // console.log(this.settings)
    // }
  }
}
