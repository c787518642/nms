import { Component, OnInit } from '@angular/core';
import { CmtsService } from '../../cmts/cmts.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalDataSource } from '../../../../../ng2-smart-table';
import { CmtsUpstreamCmComponent } from '../cmts-upstream-cm/cmts-upstream-cm.component';

@Component({
  selector: 'tw-cmts-upstream-body',
  templateUrl: './cmts-upstream-body.component.html',
  styleUrls: ['./cmts-upstream-body.component.scss']
})
export class CmtsUpstreamBodyComponent implements OnInit {
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
      cm_sum:{  title: 'CM总数' ,type:"custom",renderComponent:CmtsUpstreamCmComponent},
      qam: { title: '调制方式' },
      snr: { title: 'SNR(dB)' },
      ber: { title: 'BER(%)' },
      npa: { title: 'NPA', type: "html", valuePrepareFunction: (cell, row) => { if (cell < 90) { return `<span class="text-danger">${cell}</span>` } else return cell } }
    }
  };
  settings_some: any = {
    hideSubHeader: true, actions: { add: false, edit: false, delete: false },
    columns: { 
      p_name: { title: '名称', }, 
      status: { title: '状态', type: "html", valuePrepareFunction: (cell, row) => { if (cell) { return ` <i  class="fa fa-circle green" ></i> ` } else { return ` <i class="fa fa-circle red" ></i>` } } },
      cm_sum:{  title: 'CM总数' ,type:"custom",renderComponent:CmtsUpstreamCmComponent},

     }
  };
  show_detial = false;
  pageIndex = 1;
  cid;
  pid;
  domainIndex;
  constructor(
    private cmtsService: CmtsService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.route.queryParamMap.subscribe((data) => {
      document.getElementsByClassName("scrollable-container")[0].scrollTop = 0;
      this.cid = data.get("cid")
      this.pid = data.get("pid")
      this.domainIndex = data.get("domain_index")||"";
      this.getCmtsUpstreamList({ cid: this.cid ,domainIndex:this.domainIndex})
    })
  }
  getCmtsUpstreamList(obj) {
  
    this.cmtsService.getCmtsUpstreamList(obj).subscribe((data) => {
      if (data["code"] && data["code"] == 1) {
        this.source.load(data["data"]);
        this.source.setPage(this.pageIndex, false)
      }
    })
  }
}
