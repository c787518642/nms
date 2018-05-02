import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'tw-mac-domain-cm',
  templateUrl: './mac-domain-cm.component.html',
  styleUrls: ['./mac-domain-cm.component.scss']
})
export class MacDomainCmComponent implements OnInit {
  @Input() value: string | number;
  @Input() rowData: any;
  class = "";
  title = "";
  pid;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.pid = this.rowData.pid
    if (!(this.value == 0 || this.value == -1)) {
      this.class = "underLine"
    }
    // this.num=rowData.
  }
  toCmList() {
    this.route.url.subscribe(data => {
      this.title = data[0].path
    })
    // this.route.snapshot.q
    if (!(this.value == 0 || this.value == -1)) {
      // console.log("goCmList")
      this.router.navigate([`pages/equ-manage/${this.title}/mac-domain/cm`], {
        queryParams: { pid: this.pid },
        queryParamsHandling: "merge"
      })
    }

  }

}
