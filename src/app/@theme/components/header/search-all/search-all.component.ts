import { Component, OnInit } from '@angular/core';
import { SearchAllService } from './search-all.service';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'tw-search-all',
  templateUrl: './search-all.component.html',
  styleUrls: ['./search-all.component.scss']
})
export class SearchAllComponent implements OnInit {
  hub_selected = JSON.parse(localStorage.getItem("cm"));
  cmts_selected = JSON.parse(localStorage.getItem("cmts"));
  items: { name: string, id: string, selected }[]
  result = [];
  liClass=false
  constructor(
    private searchAllService: SearchAllService,
    private themeService: NbThemeService,
  ) { }

  ngOnInit() {
    document.getElementById("search").focus();
    this.items = [{
      //   name: "机房", id: "1", selected: this.hub_selected
      // }, {
      name: "cmts", id: "2", selected: this.cmts_selected
    }];

    this.result = this.searchAllService.getHistory().slice(0, 4)
  }
  closeSearch() {
    this.themeService.removeLayoutClass("with-search")
    this.themeService.removeLayoutClass("rotate-layout")
    this.searchAllService.toggle();
  }

  onclick(name) {
    for (let i of this.items) {
      if (i.name == name) {
        i.selected = !i.selected
      }
      localStorage.setItem(i.name, JSON.stringify(i.selected))
    }
  }
  search(items,value) {
   
    if (!value) { return }
    let type=[];
    for(let i of items){
      i.selected?type.push(i.id):"";
    }
    this.searchAllService.search({ type: type.join(","), value: value }).subscribe(data => {
      if (data["code"] && data["code"] == 1) {
        let result = [];
        let arr: [{ id, type, name }] = data["data"];
        for (let i of arr) {
          switch (i.type) {
            case "cmts": {
              result.push({ link: "./equ-manage/cmts", id: i.id, name: i.name, type: i.type })
              break;
            }
          }
        }
        this.result = result.slice(0, 4);
      }

    })

  }
  saveToHistory(i) {
    this.closeSearch();
    let searchHistory = this.searchAllService.getHistory();
    localStorage.setItem("searchHistory", JSON.stringify(!searchHistory ? i : (JSON.stringify(i) == JSON.stringify(searchHistory[0])) ? searchHistory : [i, ...searchHistory].slice(0, 10)))

  }
  preventDeault(e) {
    e.preventDefault();
    e.stopPropagation()
  }
}
