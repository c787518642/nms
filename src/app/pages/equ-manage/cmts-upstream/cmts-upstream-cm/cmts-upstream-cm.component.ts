import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tw-cmts-upstream-cm',
  templateUrl: './cmts-upstream-cm.component.html',
  styleUrls: ['./cmts-upstream-cm.component.scss']
})
export class CmtsUpstreamCmComponent implements OnInit {
  @Input() value: string | number;
  @Input() rowData: any;
  class;
  title = "cmts";
  pid
  p_index
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    if (!(this.value == 0 || this.value == -1)) {
      this.class = "underLine"
    }
  }
  toCmList() {
    this.pid = this.rowData.pid;
    this.p_index = this.rowData.p_index
    this.route.url.subscribe(data => {
      this.title = data[0].path;
    })
    // this.route.snapshot.q
    if (!(this.value == 0 || this.value == -1)) {
      this.route.url.subscribe(data => {
        let path = data[1].path;

        if (path == "port") {
          this.router.navigate([`pages/equ-manage/${this.title}/mac-domain-port/cm`], {
            queryParams: { pid: this.pid, p_index: this.p_index },
            queryParamsHandling: "merge"
          })
        } else if (path == "cmts-upstream") {
          this.router.navigate([`pages/equ-manage/${this.title}/cmts-upstream/cm`], {
            queryParams: { pid: this.pid, p_index: this.p_index },
            queryParamsHandling: "merge"
          })
        }
      })
    }

  }
}
