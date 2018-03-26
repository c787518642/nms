import { Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'ngx-temperature',
  styleUrls: ['./temperature.component.scss'],
  templateUrl: './temperature.component.html',
})
export class TemperatureComponent implements OnDestroy {
  data1=43;
  data2=51;
  data3=38;
  temperature = 50;
  temperatureOff = false;
  

  

  colors1={
    layoutBg:"#999999",
    temperature:"#42db7d"
  };
  colors2={
    layoutBg:"#999999",
    temperature:"#4cc2ff"
  };
  colors3={
    layoutBg:"#999999",
    temperature:"#fddc42"
  };
 

  constructor(private theme: NbThemeService) {
   
  }

  ngOnDestroy() {
  
  }
}
