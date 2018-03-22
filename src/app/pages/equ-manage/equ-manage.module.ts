import { Ng2SmartTableModule } from 'ng2-smart-table';
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
import { CmtsTableComponent } from './cmts-detail/cmts-table/cmts-table.component';
import { CmtsListTableComponent } from './cmts/cmts-list-table/cmts-list-table.component';
import { CmtsListTableSnmpComponent } from './cmts/cmts-list-table/cmts-list-table-snmp/cmts-list-table-snmp.component';

@NgModule({
  imports: [
    ThemeModule,
    CommonModule,
    EquManageRoutingModule,
    AngularEchartsModule,
    NgxChartsModule,
    Ng2SmartTableModule
  ],
  declarations: [
    EquManageComponent,
    CmtsComponent,
    CmtsDetailComponent,
    WaterChartComponent,
    CmtsTableComponent,
    CmtsListTableComponent,
    CmtsListTableSnmpComponent,
  ],
  entryComponents:[
    CmtsListTableSnmpComponent
  ]
})
export class EquManageModule { }
