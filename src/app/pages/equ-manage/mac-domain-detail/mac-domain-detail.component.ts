import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tw-mac-domain-detail',
  templateUrl: './mac-domain-detail.component.html',
  styleUrls: ['./mac-domain-detail.component.scss']
})
export class MacDomainDetailComponent implements OnInit {
  @Input() macName;
  @Input() pid;
  constructor() { }

  ngOnInit() {
    
  }

}
