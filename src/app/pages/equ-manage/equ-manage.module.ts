import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { EquManageComponent } from './equ-manage.component';
import { CmtsComponent } from './cmts/cmts.component';
import { CmtsDetailComponent } from './cmts-detail/cmts-detail.component';
import { WaterChartComponent } from './cmts-detail/water-chart/water-chart.component';
import {TemperatureComponent } from './cmts-detail/temperature/temperature.component'
import { TemperatureDraggerComponent } from './cmts-detail/temperature/temperature-dragger/temperature-dragger.component'
import { EquManageRoutingModule } from './equ-manage-routing.module';
import { ThemeModule } from '../../@theme/theme.module';
import { CmtsTableComponent } from './cmts-detail/cmts-table/cmts-table.component';
import { CmtsListTableComponent } from './cmts/cmts-list-table/cmts-list-table.component';
import { CmtsListTableSnmpComponent } from './cmts/cmts-list-table/cmts-list-table-snmp/cmts-list-table-snmp.component';
import { CmtsCollectionChangeComponent } from './cmts-detail/cmts-collection-change/cmts-collection-change.component';
import { CmtsDetailChartsComponent } from './cmts-detail/cmts-detail-charts/cmts-detail-charts.component';

@NgModule({
  imports: [
    ThemeModule,
    CommonModule,
    EquManageRoutingModule,
    NgxEchartsModule,
    NgxChartsModule,
    Ng2SmartTableModule
  ],
  declarations: [
    EquManageComponent,
    CmtsComponent,
    CmtsDetailComponent,
    WaterChartComponent,
    TemperatureComponent,
    TemperatureDraggerComponent,
    CmtsTableComponent,
    CmtsListTableComponent,
    CmtsListTableSnmpComponent,
    CmtsCollectionChangeComponent,
    CmtsDetailChartsComponent,
  ],
  entryComponents:[
    CmtsListTableSnmpComponent
  ]
})
export class EquManageModule { }
