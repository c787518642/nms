import { PortsService } from './ports.service';
import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'tw-ports',
  templateUrl: './ports.component.html',
  styleUrls: ['./ports.component.scss']
})
export class PortsComponent implements OnInit {
  data_obj={
    ber1:"0",
    ber2:"0",
    ber3:"0",
    qam2:"0%",
    qam3:"0%",
    qam4:"0%",
    qam5:"0%",
    qam6:"0%",
    snr0:"0",
    snr280:"0",
    snr300:"0",
    width40W:"0",
    width80W:"0",
    width160W:"0",
    width320W:"0",
    width640W:"0"
  }
  constructor(private portsService:PortsService) { }

  ngOnInit() {
    this.portsService.getState().subscribe(response =>{
      if(response['code']&&response['code']==1){
        let data=response['data'];
        if(data){
          this.data_obj=data;
        }
        
      }
    })
  }

}
