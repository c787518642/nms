import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'tw-mac-domain-name',
  templateUrl: './mac-domain-name.component.html',
  styleUrls: ['./mac-domain-name.component.scss']
})
export class MacDomainNameComponent implements OnInit {
  @Input() value: string | number;
  @Input() rowData: any;
  pid;
  cid;
  macName;
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.pid = this.rowData.pid || "";
    this.macName = this.rowData.macName || "";
    this.route.queryParamMap.subscribe(data => {
      this.cid = data.get("cid")
    })
  }
  toMacDomainDetial() {
    if (this.pid) {
      this.router.navigate(["/pages/equ-manage/cmts/mac-domain"], {
        queryParams:{
            cid: this.cid,
            pid: this.pid,
            macName:this.macName
          }
      })
    }
  }
}
