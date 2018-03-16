import { NgModule, enableProdMode } from '@angular/core';
import { AngularEchartsModule } from 'ngx-echarts';

import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';
import { StatusCardComponent } from './status-card/status-card.component';
import { StatusCardService } from './status-card/status-card.service';
import { AlarmPreviewComponent } from './alarm-preview/alarm-preview.component';
import { TopologyComponent } from './topology/topology.component';
import { CollectionComponent } from './collection/collection.component';
import { CollectionBodyComponent } from './collection/collection-body/collection-body.component';
import { SnrComponent } from './snr/snr.component';
import { UpstreamComponent } from './upstream/upstream.component';
import { AreaComponent } from './area/area.component';
import { NetworkComponent } from './network/network.component';
import { NpaComponent } from './npa/npa.component';
import { PortsComponent } from './ports/ports.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

@NgModule({
  imports: [
    ThemeModule,
    AngularEchartsModule,
    BsDatepickerModule.forRoot()
  ],
  declarations: [
    DashboardComponent,
    // 机房、CMTS、光模块数量
    StatusCardComponent,
    // 告警预览
    AlarmPreviewComponent,
    // 拓扑图、系统公告
    TopologyComponent,
    // CM采集数量
    CollectionComponent,
    CollectionBodyComponent,
    // 上行通道信噪比全网周报表
    SnrComponent,
    // CM全网上行电平
    UpstreamComponent,
    // 全网小区运行质量统计
    AreaComponent,
    // 全网网络质量运行图
    NetworkComponent,
    // 全网NPA分数统计
    NpaComponent,
    // 全网端口统计
    PortsComponent,
  ],
  providers:[
    StatusCardService
  ]
})
export class DashboardModule { }
