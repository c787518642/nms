import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class MenulistService {
  public menulist = new EventEmitter();
  npaShow: boolean = false;
  alarmShow: boolean = false;
  private items;
  constructor(

  ) { }
  get() {
    this.items = [
      {
        npa: [{
          time: '日', value: 93
        }, {
          time: '周', value: 94
        }, {
          time: '月', value: 93.5
        }],
        link: './',
        show: this.npaShow
      },
      {
        alarm: [{
          name: '严重告警', value: '4000',color:'red'
        }, {
          name: '主要告警', value: '0',color:'orange'
        }, {
          name: '次要告警', value: '0',color:'yellow'
        }, { 
          name: '提示告警', value: '4000' ,color:'blue'
      }],
        link: './',
        show: this.alarmShow
      }];
    this.menulist.emit(this.items)
    // return 
  }
  set(x) {
    if (x == 'user') {
      this.npaShow = false;
      this.alarmShow = false;

    }
    else if (x == "alarm") {
      if (!this.alarmShow) {
        this.npaShow = false;
        this.alarmShow = true;
      } else {
        this.npaShow = false;
        this.alarmShow = false;
      }
    } else if (x == "npa") {
      if (!this.npaShow) {
        this.npaShow = true;
        this.alarmShow = false;
      } else {
        this.npaShow = false;
        this.alarmShow = false;
      }
    } else {
      this.npaShow = false;
      this.alarmShow = false;
    }
    this.items = [
      {
        npa: [{
          time: '日', value: 93
        }, {
          time: '周', value: 94
        }, {
          time: '月', value: 93.5
        }],
        link: './',
        show: this.npaShow
      },
      {
        alarm: [{
          name: '严重告警', value: '4000',color:'red'
        }, {
          name: '主要告警', value: '0',color:'orange'
        }, {
          name: '次要告警', value: '0',color:'yellow'
        }, { 
          name: '提示告警', value: '4000' ,color:'blue'
      }],
        link: './',
        show: this.alarmShow
      }];
    this.menulist.emit(this.items)

    // for(let item of this.items){
    //   console.log(item.show)
    //   if(item.show===true){
    //     console.log("x:",x)
    //     if(x=="alarm"){
    //       this.items=[{name:'1111',link:'./',show:false},{name:'2222',link:'./',show:false}]
    //     }else if(x=="npa"){
    //       this.items=[{name:'1111',link:'./',show:false},{name:'2222',link:'./',show:false}]
    //     }
    //     this.menulist.emit(this.items)
    //     return
    //   }
    // }
    //   if(x=="alarm"){
    //     this.items=[{name:'1111',link:'./',show:false},{name:'2222',link:'./',show:true}]
    //   }else if(x=="npa"){
    //     this.items=[{name:'1111',link:'./',show:true},{name:'2222',link:'./',show:false}]
    //   }

    // // this.items=[{name:'1111',link:'./',show:false},{name:'2222',link:'./',show:false}]
    // // console.log(this.items)
    // this.menulist.emit(this.items)
  }
}
