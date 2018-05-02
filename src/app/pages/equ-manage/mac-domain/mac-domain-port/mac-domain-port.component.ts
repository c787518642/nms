import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'tw-mac-domain-port',
  templateUrl: './mac-domain-port.component.html',
  styleUrls: ['./mac-domain-port.component.scss']
})
export class MacDomainPortComponent implements OnInit {
  @Input() value: string | number;
  @Input() rowData: any;
  num=0;
  class;
  title="cmts";
  domain_index
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    
  ) { }

  ngOnInit() {
    this.domain_index=this.rowData.domain_index

    this.num=parseInt(this.rowData.usPort)+parseInt(this.rowData.dsPort);
    if (!(this.num == 0 || this.num == -1)) {
      this.class = "underLine"
    }
  }
  goPort(){
    if (!(this.num == 0 || this.num == -1)) {
      // console.log("goPort");
      this.route.url.subscribe(data=>{
        this.title=data[0].path
      })
      this.router.navigate([`pages/equ-manage/${this.title}/port`], {
        queryParams: { domain_index:this.domain_index},
        queryParamsHandling: "merge"
      })
    }
  
  }
}
