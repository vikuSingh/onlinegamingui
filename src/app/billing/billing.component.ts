import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Cart } from '../cart';
import { Billing } from '../billing';
import { BillingService } from '../billing.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit {

  
  billing : Billing = new Billing();
  response : any;
  firstName : string;
  lastName : string;
  city : string;
  pinCode : string;
  email : string;
  phoneNo : number;
  product : string;
  price :number;
  subTotal :number;
  total :number;


  constructor(private billingService :BillingService, private router : Router) { }

  

  ngOnInit() {
        
    
  }

  public saveBilling(){
    this.billing.firstName=this.firstName;
    this.billing.lastName=this.lastName;
    this.billing.city=this.city;
    this.billing.pinCode=this.pinCode;
    this.billing.email=this.email;
    this.billing.phoneNo=this.phoneNo;
    this.billing.product=this.product;
    this.billing.price=this.price;
    this.billing.subTotal=this.subTotal;
    this.billing.total=this.total;

    

    this.billingService.saveBilling(this.billing).subscribe(
      data =>{
        this.response=data;
        if (this.response == true) {
          this.router.navigateByUrl('/gallery');
        }
        console.log(data);
      },

      error => console.log(error)
    );


  }

}
