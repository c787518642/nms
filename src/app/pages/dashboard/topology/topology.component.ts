import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topology',
  templateUrl: './topology.component.html',
  styleUrls: ['./topology.component.scss']
})
export class TopologyComponent implements OnInit {

  constructor(
    private router:Router
  ) { }

  ngOnInit() {
  }
  navigate(x){
    this.router.navigate(['./pages'])
  }
}
