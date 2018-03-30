import { Component, OnInit } from '@angular/core';
import { CollectionService } from './collection.service';
@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {
  // items:{title:string,item:{}[] }[] ;
  code:any;
  items=[{
    title: "全网CM", item: [{
      name: "total", value: 60000,id:0
    }, {
      name: "online", value: 50000,id:1
    }, {
      name: "upstream", value: 40000,id:2
    }, {
      name: "downstream", value: 30000,id:3
    }, {
      name: "qam64", value: 20000,id:4
    }]
  },{
    title: "CMTS-CM", item: [{
      name: "total", value: 6000,id:0
    }, {
      name: "online", value: 5000,id:1
    }, {
      name: "upstream", value: 4000,id:2
    }, {
      name: "downstream", value: 3000,id:3
    }, {
      name: "qam64", value: 2000,id:4
    }]
  },{
    title: "DCMTS-CM", item: [{
      name: "total", value: 600,id:0
    }, {
      name: "online", value: 500,id:1
    }, {
      name: "upstream", value: 400,id:2
    }, {
      name: "downstream", value: 300,id:3
    }, {
      name: "qam64", value: 200,id:4
    }]
  }]
  constructor(private collectionService:CollectionService) { }

  ngOnInit() {
    this.collectionService.getCollection().subscribe(response => {
      this.code=response["code"];
      if(this.code==1){
       
      }
      
   })
  
  }

}
