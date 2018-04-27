import { MacDomainNameComponent } from './mac-domain-name/mac-domain-name.component';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Output } from '@angular/core';
import { LocalDataSource } from '../../../../ng2-smart-table';
import { CmtsService } from '../cmts/cmts.service';
import { BreadcrumbService } from '../../../@theme/components/header/breadcrumb/breadcrumb.service';

@Component({
  selector: 'tw-mac-domain',
  templateUrl: './mac-domain.component.html',
  styleUrls: ['./mac-domain.component.scss']
})
export class MacDomainComponent implements OnInit {
  public source = new LocalDataSource();
  settings: any = {
    // selectMode: 'multi',
    hideSubHeader: true,
    actions: { add: false, edit: false, delete: false },
    columns: {
      // index: { title: '序号', valuePrepareFunction: (cell, row ) => { return cell.row.index + 1 } },
      macName: { title: 'MAC域', type: "custom", renderComponent: MacDomainNameComponent },
      usFlow: { title: '上行流量(Mbps)', },
      cmTotal: { title: 'CM总数', },
      cmOnline: { title: 'CM在线数', },
      port: { title: '上下行端口', },
    }
  };
  settings_some = {
    hideSubHeader: true, actions: { add: false, edit: false, delete: false },
    columns: { macName: { title: 'MAC域', type: "custom", renderComponent: MacDomainNameComponent}, cmTotal: { title: 'CM总数', }, port: { title: '上下行端口', } }
  };
  cid: any;
  pid;
  macName;
  title = "cmts"

  showDetail = false;

  constructor(
    private cmtsService: CmtsService,
    private route: ActivatedRoute,
    private breadcrumb: BreadcrumbService,
  ) { }

  ngOnInit() {
    this.route.url.subscribe(data => {
      let path = data[0].path;
      this.title = path;
    })

    this.cid = this.route.snapshot.queryParamMap.get("cid");
    this.getMacDomainList();

    this.route.queryParamMap.subscribe(data => {
      this.pid = data.get("pid")
      if (this.pid) {
        this.macName=data.get("macName")
        this.showDetail = true;
        this.breadcrumb.set([
          { name: this.title.toUpperCase(), link: '/pages/equ-manage/' + this.title },
          { name: 'MAC域', link: `/pages/equ-manage/${this.title}/mac-domain`, queryParams: { cid: this.cid } },
          { name: "详情", link: `/pages/equ-manage/${this.title}/mac-domain` , queryParams: { cid: this.cid ,pid:this.pid ,macName:this.macName}}
        ]);
      } else {
        this.showDetail = false;
        this.breadcrumb.set([
          { name: this.title.toUpperCase(), link: '/pages/equ-manage/' + this.title },
          { name: 'MAC域', link: `/pages/equ-manage/${this.title}/mac-domain`, queryParams: { cid: this.cid } },
    
        ])
      }

    })
  }


  onSearch() { }

  getMacDomainList() {
    if (this.cid) {
      this.cmtsService.getMacDomainList(this.cid).subscribe(data => {
        if (data["code"] && data["code"] == 1) {
          this.source.load(data["data"]);
          // this.source.setPage(this.pageIndex, false)
        }
      })
    }


  }
}
