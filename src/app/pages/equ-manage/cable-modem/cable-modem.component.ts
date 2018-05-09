import { BreadcrumbService } from './../../../@theme/components/header/breadcrumb/breadcrumb.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ToasterService } from 'angular2-toaster';
import { CmtsService } from '../cmts/cmts.service';
import { LocalDataSource } from '../../../../ng2-smart-table';

@Component({
  selector: 'tw-cable-modem',
  templateUrl: './cable-modem.component.html',
  styleUrls: ['./cable-modem.component.scss']
})
export class CableModemComponent implements OnInit {
  public source = new LocalDataSource();
  settings: any = {
    // selectMode: 'multi',
    hideSubHeader: true,
    actions: { add: false, edit: false, delete: false },
    columns: {
      // index: { title: '序号', valuePrepareFunction: (cell, row ) => { return cell.row.index + 1 } },
      mac: { title: 'MAC', },
      cm_ip: { title: 'IP', },
      status: {
        title: '在线状态', type: "html", valuePrepareFunction: (cell, row) => {
          if (cell >= 6) {
            return ` <i  class="fa fa-circle green" ></i> `
          } else {
            return ` <i class="fa fa-circle red" ></i>`
          }
        }
      },
      u_level: {
        title: '电平(dBmv)', type: "html",
        valuePrepareFunction: (cell, row) => {
          if (cell == "--") { return cell }
          let arr = cell.split(",");
          let new_arr = [];
          for (let i of arr) { new_arr.push((parseInt(i) / 10).toFixed(0)); }
          return new_arr.join(";")
        }
      },
      cm_snr: { title: 'SNR(dB)' },
      score: { title: 'CMPA', type: "html", valuePrepareFunction: (cell, row) => { if (cell < 90) { return `<span class="text-danger">${cell}</span>` } else return cell } }
    }
  };
  settings_some = {
    hideSubHeader: true, actions: { add: false, edit: false, delete: false },
    columns: {
      mac: { title: 'MAC', },
      status: {
        title: '在线状态', type: "html", valuePrepareFunction: (cell, row) => {
          if (cell >= 6) {
            return ` <i  class="fa fa-circle green" ></i> `
          } else {
            return ` <i class="fa fa-circle red" ></i>`
          }
        }
      },
      cm_snr: { title: 'SNR(dB)' },
    }
  };

  c_nickname;
  cid;
  domain_index;
  p_index;
  title = "cmts";
  constructor(
    private route: ActivatedRoute,
    private breadcrumbService: BreadcrumbService,
    private toasterService: ToasterService,
    private cmtsService: CmtsService
  ) { }

  ngOnInit() {

    this.c_nickname = this.route.snapshot.queryParamMap.get("c_nickname")
    this.cid = this.route.snapshot.queryParamMap.get("cid");
    this.domain_index = this.route.snapshot.queryParamMap.get("domain_index");
    this.p_index = this.route.snapshot.queryParamMap.get("p_index");
    this.route.url.subscribe(data => {
      this.title = data[0].path
      console.log(data[1].path)
      switch (data[1].path) {
        // cmts——端口列表——CM
        case "cmts-upstream": {
          this.breadcrumbService.set([
            { name: this.title.toUpperCase(), link: `/pages/equ-manage/${this.title}` },
            { name: '上行端口列表', link: `/pages/equ-manage/${this.title}/cmts-upstream`, queryParams: { cid: this.cid } },
            { name: "CM" },
          ])
          this.getCmListDatabase()
          break
        }
        // MAC域——端口列表——CM
        case "mac-domain-port": {
          this.breadcrumbService.set([
            { name: this.title.toUpperCase(), link: `/pages/equ-manage/${this.title}` },
            { name: 'MAC域', link: `/pages/equ-manage/${this.title}/mac-domain`, queryParams: { cid: this.cid, c_nickname: this.c_nickname } },
            { name: "端口", link: `/pages/equ-manage/${this.title}/port`, queryParams: { cid: this.cid, c_nickname: this.c_nickname, domain_index: this.domain_index } },
            { name: "CM" },
          ])
          this.getCmListDatabase()
          break
        }
        //  MAC域——CM
        case "mac-domain": {
          this.showNotice()
          this.breadcrumbService.set([
            { name: this.title.toUpperCase(), link: `/pages/equ-manage/${this.title}` },
            { name: 'MAC域', link: `/pages/equ-manage/${this.title}/mac-domain`, queryParams: { cid: this.cid, c_nickname: this.c_nickname } },
            { name: "CM" },
          ])
          break
        }
      }

    })

  }
  showNotice() {
    this.toasterService.popAsync({
      type: 'info',
      body: "MAC域-CM列表 暂无",
      // timeout:8000
    });
  }
  getCmListDatabase() {
    console.log({ cid: this.cid, p_index: this.p_index })
    this.cmtsService.getCmListDatabase({ cid: this.cid, p_index: this.p_index }).subscribe(data => {
      // if(data["code"]&&data["code"]==1){
      this.source.load(data["data"]);
      // }
    })
  }
}
