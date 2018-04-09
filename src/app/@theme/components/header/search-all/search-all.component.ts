import { Component, OnInit } from '@angular/core';
import { SearchAllService } from './search-all.service';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'tw-search-all',
  templateUrl: './search-all.component.html',
  styleUrls: ['./search-all.component.scss']
})
export class SearchAllComponent implements OnInit {
  cm_selected = JSON.parse(localStorage.getItem("cm"));
  cmts_selected = JSON.parse(localStorage.getItem("cmts"));
  items:{name:string,id:string,selected}[]
  search_data=["111","222","333","444","444"].slice(0,4)
  constructor(
    private searchAllService: SearchAllService,
    private themeService: NbThemeService,
  ) { }

  ngOnInit() {
    document.getElementById("search").focus();
    this.items= [{
    //   name: "CM", id: "cm", selected: this.cm_selected
    // }, {
      name: "CMTS", id: "cmts", selected: this.cmts_selected
    }];
  }
  closeSearch() {
    this.themeService.removeLayoutClass("with-search")
    this.themeService.removeLayoutClass("rotate-layout")
    this.searchAllService.toggle();
  }

  onclick(id) {
    for (let i of this.items) {
      if (i.id == id) {
        i.selected = !i.selected
      }
      localStorage.setItem(i.id, JSON.stringify(i.selected))
    }

    // console.log(id)
    // localStorage.setItem("searchItems", JSON.stringify())
  }
}
