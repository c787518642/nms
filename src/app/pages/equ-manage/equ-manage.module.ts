import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularEchartsModule } from 'ngx-echarts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { EquManageComponent } from './equ-manage.component';
import { CmtsComponent } from './cmts/cmts.component';
import { CmtsDetailComponent } from './cmts-detail/cmts-detail.component';
import { WaterChartComponent } from './cmts-detail/water-chart/water-chart.component';
import { EquManageRoutingModule } from './equ-manage-routing.module';
import { ThemeModule } from '../../@theme/theme.module';

@NgModule({
  imports: [
    ThemeModule,
    CommonModule,
    EquManageRoutingModule,
    AngularEchartsModule,
    NgxChartsModule

  ],
  declarations: [
    EquManageComponent,
    CmtsComponent,
    CmtsDetailComponent,
    WaterChartComponent,
  ]
})
export class EquManageModule { }
