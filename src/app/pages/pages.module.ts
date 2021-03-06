import { NgModule, ErrorHandler } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { AppErrorHandler } from '../errors/errorHandler';
import { ToasterModule } from 'angular2-toaster';

const PAGES_COMPONENTS = [
  PagesComponent,
];

@NgModule({
  imports: [
    ToasterModule,
    PagesRoutingModule,
    ThemeModule,
    NgbModule,
    DashboardModule,
  ],
  declarations: [
    ...PAGES_COMPONENTS,
   
  ],
})
export class PagesModule {
}
