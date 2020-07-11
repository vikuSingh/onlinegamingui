import { Component, OnInit } from '@angular/core';
import { BillingService } from '../billing.service';

@Component({
  selector: 'app-cancelorder',
  templateUrl: './cancelorder.component.html',
  styleUrls: ['./cancelorder.component.css']
})
export class CancelorderComponent implements OnInit {

  response : any;
  cancelBill : any;


  constructor( private billingService : BillingService) { }

  ngOnInit() {
    this.getCancelBill();
  }

  public getCancelBill(){
    this.billingService.getCancelBilling().subscribe( data =>{
      this.response=data;
      this.cancelBill=this.response;
    },
    error =>console.log(error));     
    
  }

}
