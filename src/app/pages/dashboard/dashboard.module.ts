
import { NgModule, enableProdMode, ErrorHandler } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';
import { StatusCardComponent } from './status-card/status-card.component';
import { StatusCardService } from './status-card/status-card.service';
import { AlarmPreviewComponent } from './alarm-preview/alarm-preview.component';
import { AlarmPreviewService } from './alarm-preview/alarm-preview.service';
import { TopologyComponent } from './topology/topology.component';
import { CollectionComponent } from './collection/collection.component';
import { CollectionBodyComponent } from './collection/collection-body/collection-body.component';
import { CollectionService } from './collection/collection.service';
import { SnrComponent } from './snr/snr.component';
import { SnrService } from './snr/snr.service';
import { UpstreamComponent } from './upstream/upstream.component';
import { UpstreamService } from './upstream/upstream.service';
import { AreaComponent } from './area/area.component';
import { AreaService } from './area/area.service';
import { NetworkComponent } from './network/network.component';
import { NetworkService } from './network/network.service';
import { NpaComponent } from './npa/npa.component';
import { NpaService } from './npa/npa.service';
import { PortsComponent } from './ports/ports.component';
import { PortsService } from './ports/ports.service';
import { SnrBodyComponent } from './snr/snr-body/snr-body.component';
import { SnrLineComponent } from './snr/snr-line/snr-line.component';
import { UpLineComponent } from './upstream/up-line/up-line.component';
import { UpPieComponent } from './upstream/up-pie/up-pie.component';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { imageOverlay } from 'leaflet';
import { AppErrorHandler } from '../../errors/errorHandler';


@NgModule({
  imports: [
    ThemeModule,
    NgxEchartsModule,
    BsDatepickerModule.forRoot(),
    FormsModule,
    HttpClientModule
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
    SnrBodyComponent,
    SnrLineComponent,
    // CM全网上行电平
    UpstreamComponent,
    UpLineComponent,
    UpPieComponent,
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
    StatusCardService,
    AlarmPreviewService,
    CollectionService,
    AreaService,
    NetworkService,
    NpaService,
    PortsService,
    SnrService,
    UpstreamService,
  ]
})
export class DashboardModule { }
