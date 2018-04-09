import { Component, OnInit } from '@angular/core';
import { CollectionService } from './collection.service';
@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {
  show_detail1=true;
  show_detail2=false;
  show_detail3=false;
  // items:{title:string,item:{}[] }[] ;
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
      name: "total", value: 40000,id:0
    }, {
      name: "online", value: 30000,id:1
    }, {
      name: "upstream", value: 20000,id:2
    }, {
      name: "downstream", value: 10000,id:3
    }, {
      name: "qam64", value: 8000,id:4
    }]
  },{
    title: "DCMTS-CM", item: [{
      name: "total", value: 20000,id:0
    }, {
      name: "online", value: 15000,id:1
    }, {
      name: "upstream", value: 12000,id:2
    }, {
      name: "downstream", value:3000,id:3
    }, {
      name: "qam64", value: 2000,id:4
    }]
  }]
  
  constructor(private collectionService:CollectionService) { }

  ngOnInit() {
    this.collectionService.getCollection().subscribe(response => {
      if(response["code"]&&response["code"]==1){
        let data=response["data"];
        this.items=[{
          title: "全网CM", item: [{
            name: "total", value: data[0].cmAll,id:0
          }, {
            name: "online", value: data[0].cmOnl,id:1
          }, {
            name: "upstream", value: data[0].CportUp,id:2
          }, {
            name: "downstream", value: data[0].Cportdown,id:3
          }, {
            name: "qam64", value: data[0].up64qamPortSum,id:4
          }]
        },{
          title: "CMTS-CM", item: [{
            name: "total", value: data[0].bigCcmAll,id:0
          }, {
            name: "online", value: data[0].bigCcmOnl,id:1
          }, {
            name: "upstream", value: data[0].bigCportUp,id:2
          }, {
            name: "downstream", value: data[0].bigCportdown,id:3
          }, {
            name: "qam64", value: data[0].up64qamPortDC,id:4
          }]
        },{
          title: "DCMTS-CM", item: [{
            name: "total", value: data[0].smaCcmAll,id:0
          }, {
            name: "online", value: data[0].smaCcmOnl,id:1
          }, {
            name: "upstream", value: data[0].smaCportUp,id:2
          }, {
            name: "downstream", value: data[0].smaCportdown,id:3
          }, {
            name: "qam64", value: data[0].up64qamPortC,id:4
          }]
        }]
     
        this.show(this.items[1].title);
     
      }
      
   })
  
  }
  show(title){
     if(title==this.items[0].title){
       this.show_detail1=true;
       this.show_detail2=false;
       this.show_detail3=false;
     }else if(title==this.items[1].title){
       this.show_detail1=false;
       this.show_detail2=true;
       this.show_detail3=false;
     }else if(title==this.items[2].title){
      this.show_detail1=false;
      this.show_detail2=false;
      this.show_detail3=true;
    }

   }


}
