import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from '../../../../ng2-smart-table';
import { CmtsService } from '../cmts/cmts.service';
import { Route, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'tw-cmts-upstream',
  templateUrl: './cmts-upstream.component.html',
  styleUrls: ['./cmts-upstream.component.scss']
})
export class CmtsUpstreamComponent implements OnInit {
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
      snr: { title: 'SNR' },
      ber: { title: 'BER' },
      npa: { title: 'NPA', type: "html", valuePrepareFunction: (cell, row) => { if (cell < 90) { return `<span class="text-danger">${cell}</span>` } else return cell } }
    }
  };
  settings_some: any = {
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
    }
  };
  constructor(
    private cmtsService: CmtsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.queryParamMap.subscribe((data) => {
      console.log(data)
      let cid = data.get("cid")
      this.getCmtsUpstreamList({ cid: cid })
    })
  }
  getCmtsUpstreamList(obj) {
    this.cmtsService.getCmtsUpstreamList(obj).subscribe((data) => {
      if (data["code"] && data["code"] == 1) {
        this.source.load(data["data"])
      }

    })
    // let arr=[];
    // let str="sdasdsddddddddddddddddddd"
    // for(let i=0;i<100000;i++){
    //   arr.push({
    //     a:str,b:i,c:str,d:i,e:str,f:i
    //   })
    // }
    // this.source.load(arr)
  }
  onUserRowSelect(data) {

  }
}
