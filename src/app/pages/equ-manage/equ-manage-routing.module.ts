import { CmtsComponent } from './cmts/cmts.component';
import { EquManageComponent } from './equ-manage.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: '',
  component: EquManageComponent,
  children: [{
    path: 'cmts',
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
