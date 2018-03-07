import { MenulistService } from './menulist/menulist.service';
import { Component, Input, OnInit } from '@angular/core';

import { NbMenuService, NbSidebarService, NbThemeService } from '@nebular/theme';
import { UserService } from '../../../@core/data/users.service';
import { AnalyticsService } from '../../../@core/utils/analytics.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {


  @Input() position = 'normal';

  user: any;
  menus=[]
  userMenu = [{ 
      title: '设置',
    },{ 
      title: '退出', 
      // icon: 'iconfont icon-_baobiaoguanli',
      link: '/login/logout'}
    ];

  constructor(private sidebarService: NbSidebarService,
              private menuService: NbMenuService,
              private userService: UserService,
              private analyticsService: AnalyticsService,
              private router:Router,
              private themeService:NbThemeService,
              private menulistService:MenulistService
            ) {
  }

  ngOnInit() {

    let username=localStorage.getItem("username")?localStorage.getItem("username"):"-";
    this.user={ name: username, picture: '' }
    // this.userService.getUsers()
    //   .subscribe((users: any) => this.user = users.nick);
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    return false;
  }

  toggleSettings(): boolean {
    this.sidebarService.toggle(false, 'settings-sidebar');
    return false;
  }

  goToHome() {
    this.menuService.navigateHome();
  }
  startSearch() {
    this.analyticsService.trackEvent('startSearch');
  }
  onclick(x){
    this.menulistService.set(x)
    this.themeService.appendLayoutClass("with-search")
  }
}
