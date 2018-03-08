import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EquManageComponent } from './equ-manage.component';
import { CmtsComponent } from './cmts/cmts.component';
import { CmtsDetailComponent } from './cmts-detail/cmts-detail.component';
import { EquManageRoutingModule } from './equ-manage-routing.module';
import { ThemeModule } from '../../@theme/theme.module';

@NgModule({
  imports: [
    ThemeModule,
    CommonModule,
    EquManageRoutingModule
  ],
  declarations: [
    EquManageComponent,
    CmtsComponent,
    CmtsDetailComponent,
  ]
})
export class EquManageModule { }
