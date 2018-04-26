import { CmtsEthernetComponent } from './cmts-ethernet/cmts-ethernet.component';
import { CmtsUpstreamComponent } from './cmts-upstream/cmts-upstream.component';
import { CmtsComponent } from './cmts/cmts.component';
import { EquManageComponent } from './equ-manage.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CmtsDownstreamComponent } from './cmts-downstream/cmts-downstream.component';

const routes: Routes = [{
  path: '',
  component: EquManageComponent,
  children: [{
    path: 'cmts/cmts-upstream',
    component: CmtsUpstreamComponent,
  },{
    path: 'dcmts/cmts-upstream',
    component: CmtsUpstreamComponent,
  },{
    path: 'cmts/cmts-downstream',
    component: CmtsDownstreamComponent,
  },{
    path: 'dcmts/cmts-downstream',
    component: CmtsDownstreamComponent,
  },{
    path: 'cmts/cmts-ethernet',
    component: CmtsEthernetComponent,
  },{
    path: 'dcmts/cmts-ethernet',
    component: CmtsEthernetComponent,
  },{
    path: 'cmts',
    component: CmtsComponent,
  },{
    path: 'dcmts',
    component: CmtsComponent,
  },{
    path: '',
    redirectTo:"cmts",
    pathMatch:'full'
  },{
    path: '**',
    redirectTo:"cmts",
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EquManageRoutingModule { }
