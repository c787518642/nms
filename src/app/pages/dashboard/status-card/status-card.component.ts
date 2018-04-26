import { Router } from '@angular/router';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-status-card',
  styleUrls: ['./status-card.component.scss'],
  templateUrl:'./status-card.component.html' ,
})
export class StatusCardComponent {

  @Input() title: string;
  @Input() type: string;
  @Input() on = true;
  @Input() count :number;
  @Input() color : string;
  @Input() link : string;

  constructor(
    private router:Router
  ){}
  navigate(){
    console.log(this.link)
    // this.router.navigate([this.link])
  }
}
