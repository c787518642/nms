import { PortsService } from './ports.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tw-ports',
  templateUrl: './ports.component.html',
  styleUrls: ['./ports.component.scss']
})
export class PortsComponent implements OnInit {
  data_obj={
    ber1:"14518",
    ber2:"60",
    ber3:"231",
    qam2:"15.37%",
    qam3:"0.00%",
    qam4:"20.46%",
    qam5:"0.00%",
    qam6:"64.17%",
    snr0:"717",
    snr280:"647",
    snr300:"13446",
    width40W:"0",
    width80W:"1",
    width160W:"56",
    width320W:"13539",
    width640W:"0"
  }
  constructor(private portsService:PortsService) { }

  ngOnInit() {
    this.portsService.getState().subscribe(response =>{
      if(response['code']&&response['code']==1){
        let data=response['data'];
        this.data_obj=data[0];
      }
    })
  }

}
