import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from '../../../../../ng2-smart-table';
import { CmtsService } from '../../cmts/cmts.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'tw-cmts-downstream-body',
  templateUrl: './cmts-downstream-body.component.html',
  styleUrls: ['./cmts-downstream-body.component.scss']
})
export class CmtsDownstreamBodyComponent implements OnInit {
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
      qam: { title: '调制方式' },
      up_rate: { title: '利用率(%)'},
      in_max: { title: '最大速率(Mbps)' },
    }
  };
  settings_some: any = {
    hideSubHeader: true,
    actions: { add: false, edit: false, delete: false },
    columns: {
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
    }
  }
  cid;
  domainIndex
  constructor(
    private cmtsService: CmtsService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.queryParamMap.subscribe((data) => {
      this.cid = data.get("cid")
      this.domainIndex = data.get("domain_index")||"";
      this.getCmtsDownstreamList({ cid: this.cid ,domainIndex:this.domainIndex})
    
    })
  }
  getCmtsDownstreamList(obj) {
    this.cmtsService.getCmtsDownstreamList(obj).subscribe((data) => {
      if (data["code"] && data["code"] == 1) {
        this.source.load(data["data"])
      }

    })
  }
}
