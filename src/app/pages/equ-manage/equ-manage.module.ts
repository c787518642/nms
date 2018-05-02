
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxEchartsModule } from 'ngx-echarts';
import { EquManageComponent } from './equ-manage.component';
import { CmtsComponent } from './cmts/cmts.component';
import { CmtsDetailComponent } from './cmts-detail/cmts-detail.component';
import { DetailNumService } from './cmts-detail/detail-num.service';
import { WaterChartComponent } from './cmts-detail/water-chart/water-chart.component';
import { EquManageRoutingModule } from './equ-manage-routing.module';
import { ThemeModule } from '../../@theme/theme.module';
import { CmtsTableComponent } from './cmts-detail/cmts-table/cmts-table.component';
import { CmtsTableService } from './cmts-detail/cmts-table/cmts-table.service';
import { CmtsService } from './cmts/cmts.service';
import { CmtsCollectionChangeComponent } from './cmts-detail/cmts-collection-change/cmts-collection-change.component';
import { CmtsCollettionService } from './cmts-detail/cmts-collection-change/cmts-collettion.service';
import { CmtsDetailChartsComponent } from './cmts-detail/cmts-detail-charts/cmts-detail-charts.component';
import { DetailChartsService } from './cmts-detail/cmts-detail-charts/detail-charts.service';
import { Ng2SmartTableModule } from '../../../ng2-smart-table';
import { CmtsListTableSnmpComponent } from './cmts/cmts-list-table-snmp/cmts-list-table-snmp.component';
import { CmtsUpstreamComponent } from './cmts-upstream/cmts-upstream.component';
import { CmtsDownstreamComponent } from './cmts-downstream/cmts-downstream.component';
import { CmtsEthernetComponent } from './cmts-ethernet/cmts-ethernet.component';
import { CanvasChartComponent } from './cmts-detail/canvas-chart/canvas-chart.component';
import { PingLostComponent } from './cmts-detail/cmts-detail-charts/ping-lost/ping-lost.component';
import { PingDelayComponent } from './cmts-detail/cmts-detail-charts/ping-delay/ping-delay.component';
import { MemRateComponent } from './cmts-detail/cmts-detail-charts/mem-rate/mem-rate.component';
import { TempChangeComponent } from './cmts-detail/cmts-detail-charts/temp-change/temp-change.component';
import { CmOnlineComponent } from './cmts-detail/cmts-detail-charts/cm-online/cm-online.component';
import { CmtsFlowComponent } from './cmts-detail/cmts-detail-charts/cmts-flow/cmts-flow.component';
import { CmtsNpaComponent } from './cmts-detail/cmts-detail-charts/cmts-npa/cmts-npa.component';
import { CmtsNameComponent } from './cmts/cmts-name/cmts-name.component';
import { MacDomainComponent } from './mac-domain/mac-domain.component';
import { CmtsMacComponent } from './cmts/cmts-mac/cmts-mac.component';
import { MacDomainNameComponent } from './mac-domain/mac-domain-name/mac-domain-name.component';
import { MacDomainDetailComponent } from './mac-domain-detail/mac-domain-detail.component';
import { CableModemComponent } from './cable-modem/cable-modem.component';
import { MacDomainCmComponent } from './mac-domain/mac-domain-cm/mac-domain-cm.component';
import { MacDomainPortComponent } from './mac-domain/mac-domain-port/mac-domain-port.component';
import { PortComponent } from './port/port.component';
import { CmtsDownstreamBodyComponent } from './cmts-downstream/cmts-downstream-body/cmts-downstream-body.component';
import { CmtsUpstreamBodyComponent } from './cmts-upstream/cmts-upstream-body/cmts-upstream-body.component';
import { CmtsUpstreamCmComponent } from './cmts-upstream/cmts-upstream-cm/cmts-upstream-cm.component';


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
   
    CmtsTableComponent,
    CmtsListTableSnmpComponent,
    CmtsCollectionChangeComponent,
    CmtsDetailChartsComponent,
    CmtsUpstreamComponent,
    CmtsDownstreamComponent,
    CmtsEthernetComponent,
    CanvasChartComponent,
    PingLostComponent,
    PingDelayComponent,
    MemRateComponent,
    TempChangeComponent,
    CmOnlineComponent,
    CmtsFlowComponent,
    CmtsNpaComponent,
    CmtsNameComponent,
    MacDomainComponent,
    CmtsMacComponent,
    MacDomainNameComponent,
    MacDomainDetailComponent,
    CableModemComponent,
    MacDomainCmComponent,
    MacDomainPortComponent,
    PortComponent,
    CmtsDownstreamBodyComponent,
    CmtsUpstreamBodyComponent,
    CmtsUpstreamCmComponent,

  ],
  entryComponents:[
    CmtsListTableSnmpComponent,
    CmtsNameComponent,
    CmtsMacComponent,
    MacDomainNameComponent,
    MacDomainCmComponent,
    MacDomainPortComponent,
    CmtsUpstreamCmComponent
  ],
  providers:[
    CmtsService,
    DetailNumService,
    CmtsTableService,
    CmtsCollettionService,
    DetailChartsService
  ]
})
export class EquManageModule { }
