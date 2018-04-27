import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'tw-cmts-mac',
  templateUrl: './cmts-mac.component.html',
  styleUrls: ['./cmts-mac.component.scss']
})
export class CmtsMacComponent implements OnInit {
  @Input() value: string | number;
  @Input() rowData: any;
  cid;
  title="cmts"
  constructor(
    private router:Router,
    private route:ActivatedRoute
  ) { }
  
  ngOnInit() {
    this.cid=this.rowData.cid||"";
    this.route.url.subscribe(data => {
      let path = data[0].path;
      this.title = path
    })
  }
  toMacDomain(){
    this.router.navigate([`/pages/equ-manage/${this.title}/mac-domain`],{queryParams:{cid:this.cid}})
  }
}
