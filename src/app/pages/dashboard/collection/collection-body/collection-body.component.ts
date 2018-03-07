import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-collection-body',
  templateUrl: './collection-body.component.html',
  styleUrls: ['./collection-body.component.scss']
})
export class CollectionBodyComponent implements OnInit {
  @Input() item;
  value;
  activeIndex:number=0;
  constructor() { }
  ngOnInit() {
    this.getValue("total")
  }
  getValue(x){
    for(let i of this.item){
      if(i.name==x){
        this.value=i.value;
        this.activeIndex=i.id;
      }
    }
  }
}
