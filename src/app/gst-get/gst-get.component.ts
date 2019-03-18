import { BusinessService } from './../business.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gst-get',
  templateUrl: './gst-get.component.html',
  styleUrls: ['./gst-get.component.scss']
})
export class GstGetComponent implements OnInit {
  
  businesses:any =[];
  
  constructor(private businessService:BusinessService) { }

  ngOnInit() {

    this.businessService.getBusinesses().subscribe((res:any)=> {
      //debugger;  
      this.businesses=res; 
      //  console.log('this.businesses',this.businesses); 
    },err => {
        console.log(err);
    });
  }

}
