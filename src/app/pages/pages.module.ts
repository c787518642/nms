import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { EquManageComponent } from './equ-manage/equ-manage.component';
import { CmtsComponent } from './equ-manage/cmts/cmts.component';
import { CmtsDetailComponent } from './equ-manage/cmts-detail/cmts-detail.component';

const PAGES_COMPONENTS = [
  PagesComponent,
];

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    DashboardModule,
  ],
  declarations: [
    ...PAGES_COMPONENTS,
    EquManageComponent,
    CmtsComponent,
    CmtsDetailComponent,
  ],
})
export class PagesModule {
}
