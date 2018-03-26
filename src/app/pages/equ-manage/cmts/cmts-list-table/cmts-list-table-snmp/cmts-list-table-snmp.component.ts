import { Component, OnInit, Input } from '@angular/core';
import { ViewCell } from '../../../../../../assets/vendors/ng2-smart-table';

@Component({
  selector: 'tw-cmts-list-table-snmp',
  templateUrl: './cmts-list-table-snmp.component.html',
  styleUrls: ['./cmts-list-table-snmp.component.scss']
})
export class CmtsListTableSnmpComponent implements ViewCell,OnInit {
  @Input() value: string | number;
  @Input() rowData: any;
  constructor() { }
  style
  ngOnInit() {
    // 4cc2ff
    switch (this.value){
      case(0):{
        this.style="red";
        break
      }
      case(1):{
        this.style="orange";
        break
      }
      case(2):{
        this.style="green";
        break
      }
    }
  }

}
