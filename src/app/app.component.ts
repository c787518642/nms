import { HttpClient } from '@angular/common/http';
import { environment } from './../environments/environment';
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from './@core/utils/analytics.service';

@Component({
  selector: 'ngx-app',
  templateUrl: './app.compoment.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  constructor(
    // private analytics: AnalyticsService
  ) {
  }

  ngOnInit(): void {
    // this.analytics.trackPageViews();
  }

}
