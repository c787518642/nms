import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tw-cmts-name',
  templateUrl: './cmts-name.component.html',
  styleUrls: ['./cmts-name.component.scss']
})
export class CmtsNameComponent implements OnInit {
  @Input() value: string | number;
  @Input() rowData: any;
  cid;
  title="cmts"
  constructor(
    private router:Router,
    private route:ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.url.subscribe(data => {
      let path = data[0].path;
      this.title=path
    
    })
    this.cid=this.rowData.cid
  }
  toCmtsDetial(){
    console.log()
    this.router.navigate([`/pages/equ-manage/${this.title}`], { queryParams: { cid: this.cid } })

    // this.router.navigate(["./"])

  }
}
