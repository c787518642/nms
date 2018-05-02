import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topology',
  templateUrl: './topology.component.html',
  styleUrls: ['./topology.component.scss']
})
export class TopologyComponent implements OnInit {
  topologyPng = { background:`url(./assets/img/topology.png) no-repeat center 0` }
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.topologyPng={ background:`url(./assets/img/topology.png) no-repeat center 0` };
    }, 500);
  }
  navigate(x) {
    this.router.navigate(['./pages']);
  
  }
}
