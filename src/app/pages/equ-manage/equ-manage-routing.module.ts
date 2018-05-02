import { CmtsEthernetComponent } from './cmts-ethernet/cmts-ethernet.component';
import { CmtsUpstreamComponent } from './cmts-upstream/cmts-upstream.component';
import { CmtsComponent } from './cmts/cmts.component';
import { EquManageComponent } from './equ-manage.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CmtsDownstreamComponent } from './cmts-downstream/cmts-downstream.component';
import { MacDomainComponent } from './mac-domain/mac-domain.component';
import { CableModemComponent } from './cable-modem/cable-modem.component';
import { PortComponent } from './port/port.component';

const routes: Routes = [{
  path: '',
  component: EquManageComponent,
  children: [{
    // 大C端口
    path: 'cmts/port',
    component: PortComponent,
  }, {
    // 小C端口
    path: 'dcmts/port',
    component: PortComponent,
  }, {
    // 大C猫(mac域)
    path: 'cmts/mac-domain/cm',
    component: CableModemComponent,
  }, {
    // 小C猫(mac域)
    path: 'dcmts/mac-domain/cm',
    component: CableModemComponent,
  }, {
    // 大C猫(mac域>端口)
    path: 'cmts/mac-domain-port/cm',
    component: CableModemComponent,
  }, {
    // 小C猫(mac域>端口)
    path: 'dcmts/mac-domain-port/cm',
    component: CableModemComponent,
  }, {
    // 大C MAC域
    path: 'cmts/mac-domain',
    component: MacDomainComponent,
  }, {
    // 小C MAC域
    path: 'dcmts/mac-domain',
    component: MacDomainComponent,
  }, {
    // 大C猫(上行)
    path: 'cmts/cmts-upstream/cm',
    component: CableModemComponent,
  }, {
    // 小C猫(上行)
    path: 'dcmts/cmts-upstream/cm',
    component: CableModemComponent,
  }, {
    // 大C上行
    path: 'cmts/cmts-upstream',
    component: CmtsUpstreamComponent,
  }, {
    // 小C上行
    path: 'dcmts/cmts-upstream',
    component: CmtsUpstreamComponent,
  }, {
    // 大C下行
    path: 'cmts/cmts-downstream',
    component: CmtsDownstreamComponent,
  }, {
    // 小C下行
    path: 'dcmts/cmts-downstream',
    component: CmtsDownstreamComponent,
  }, {
    // 大C上联
    path: 'cmts/cmts-ethernet',
    component: CmtsEthernetComponent,
  }, {
    // 小C上联
    path: 'dcmts/cmts-ethernet',
    component: CmtsEthernetComponent,
  }, {
    //   // 大C详情
    //   path: 'cmts/:cid',
    //   component: CmtsComponent,
    // }, {
    // 大C
    path: 'cmts',
    component: CmtsComponent,
  }, {
    // 小C
    path: 'dcmts',
    component: CmtsComponent,
  }, {
    path: '',
    redirectTo: "cmts",
    pathMatch: 'full'
  }, {
    path: '**',
    redirectTo: "cmts",
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EquManageRoutingModule { }
