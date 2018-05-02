import { HttpClientModule } from '@angular/common/http';
// import { BreadcrumbService } from './@theme/components/header/breadcrumb/breadcrumb.service';
// import { BreadcrumbService } from './pages/breadcrumb.service';
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, enableProdMode, ErrorHandler } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CoreModule } from './@core/core.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ThemeModule } from './@theme/theme.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';
import { AppErrorHandler } from './errors/errorHandler';
import { NotificationsComponent } from './errors/notifications/notifications.component';
import { ToasterService, ToasterModule } from 'angular2-toaster';
// import { HttpHeaders } from '@angular/common/http';
enableProdMode();
@NgModule({
  declarations: [AppComponent,LoginComponent, NotificationsComponent],
  imports: [
   
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule,

    NgbModule.forRoot(),
    ThemeModule.forRoot(),
    CoreModule.forRoot(),
  ],
  bootstrap: [AppComponent],
  providers: [
    // ToasterService,
    LoginService,
    {provide: ErrorHandler, useClass: AppErrorHandler},
    // HttpHeaders,
    // 路由前缀
    { provide: APP_BASE_HREF, useValue: '/' },
    // { provide: APP_BASE_HREF, useValue: '/tw-cmts-server/' },
  ],
})
export class AppModule {
}
