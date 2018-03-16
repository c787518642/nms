import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tw-upstream',
  templateUrl: './upstream.component.html',
  styleUrls: ['./upstream.component.scss']
})
export class UpstreamComponent implements OnInit {
  show_detail=true;
  constructor() { }

  ngOnInit() {
  }
  show(){
    this.show_detail=!this.show_detail;

   }
}
