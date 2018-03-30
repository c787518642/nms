import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxEchartsModule } from 'ngx-echarts';
import { EquManageComponent } from './equ-manage.component';
import { CmtsComponent } from './cmts/cmts.component';
import { CmtsDetailComponent } from './cmts-detail/cmts-detail.component';
import { WaterChartComponent } from './cmts-detail/water-chart/water-chart.component';
import { TemperatureComponent } from './cmts-detail/temperature/temperature.component';
import { TemperatureDraggerComponent } from './cmts-detail/temperature/temperature-dragger/temperature-dragger.component';
import { EquManageRoutingModule } from './equ-manage-routing.module';
import { ThemeModule } from '../../@theme/theme.module';
import { CmtsTableComponent } from './cmts-detail/cmts-table/cmts-table.component';
import { CmtsService } from './cmts/cmts.service';
import { CmtsCollectionChangeComponent } from './cmts-detail/cmts-collection-change/cmts-collection-change.component';
import { CmtsDetailChartsComponent } from './cmts-detail/cmts-detail-charts/cmts-detail-charts.component';
import { Ng2SmartTableModule } from '../../../ng2-smart-table';
import { CmtsListTableSnmpComponent } from './cmts/cmts-list-table-snmp/cmts-list-table-snmp.component';
import { CmtsUpstreamComponent } from './cmts-upstream/cmts-upstream.component';

@NgModule({
  imports: [
    ThemeModule,
    CommonModule,
    EquManageRoutingModule,
    NgxEchartsModule,
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
    CmtsListTableSnmpComponent,
    CmtsCollectionChangeComponent,
    CmtsDetailChartsComponent,
    CmtsUpstreamComponent,
  ],
  entryComponents:[
    CmtsListTableSnmpComponent
  ],
  providers:[
    CmtsService
  ]
})
export class EquManageModule { }
