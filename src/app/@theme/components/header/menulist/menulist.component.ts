import { Component, OnInit, Input } from '@angular/core';
import { MenulistService } from './menulist.service';

@Component({
  selector: 'app-menulist',
  templateUrl: './menulist.component.html',
  styleUrls: ['./menulist.component.scss']
})
export class MenulistComponent implements OnInit {
  // @Input('menus') menus 
  menus:any[]
  constructor(
    private menulistService:MenulistService
  ) { 
  }

  ngOnInit() {
    this.menulistService.menulist.subscribe(data=>{
      this.menus=data
    })
    this.menulistService.get()
  }

}
