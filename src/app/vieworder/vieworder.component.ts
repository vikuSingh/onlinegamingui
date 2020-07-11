import { Component, OnInit } from '@angular/core';
import { BillingService } from '../billing.service';

@Component({
  selector: 'app-vieworder',
  templateUrl: './vieworder.component.html',
  styleUrls: ['./vieworder.component.css']
})
export class VieworderComponent implements OnInit {

  response: any;
  billList : any;


  constructor(private billingService : BillingService) { }

  ngOnInit() {
    this.getBilling()
  }

  public getBilling(){

    this.billingService.getBilling().subscribe(
      data =>{

        this.response=data;
        this.billList=this.response;

      },
      error=>console.log(error));
      
  }

}
