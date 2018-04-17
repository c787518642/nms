import { Component, OnInit } from '@angular/core';
import { CollectionService } from './collection.service';
import { environment } from '../../../../environments/environment';
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
      name: "total", value: 0,id:0
    }, {
      name: "online", value: 0,id:1
    }, {
      name: "upstream", value: 0,id:2
    }, {
      name: "downstream", value: 0,id:3
    }, {
      name: "qam64", value: 0,id:4
    }]
  },{
    title: "CMTS-CM", item: [{
      name: "total", value: 0,id:0
    }, {
      name: "online", value: 0,id:1
    }, {
      name: "upstream", value: 0,id:2
    }, {
      name: "downstream", value: 0,id:3
    }, {
      name: "qam64", value: 0,id:4
    }]
  },{
    title: "DCMTS-CM", item: [{
      name: "total", value: 0,id:0
    }, {
      name: "online", value: 0,id:1
    }, {
      name: "upstream", value: 0,id:2
    }, {
      name: "downstream", value:0,id:3
    }, {
      name: "qam64", value: 0,id:4
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
     
        this.show("CMTS-CM");
     
      }
      
   }, error => { environment.error(error["status"]) })
  
  }
  show(title){
     if(title=='全网CM'){
       this.show_detail1=true;
       this.show_detail2=false;
       this.show_detail3=false;
     }else if(title=="CMTS-CM"){
       this.show_detail1=false;
       this.show_detail2=true;
       this.show_detail3=false;
     }else if(title=="DCMTS-CM"){
      this.show_detail1=false;
      this.show_detail2=false;
      this.show_detail3=true;
    }

   }


}
