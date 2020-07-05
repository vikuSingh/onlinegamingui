import { Component, OnInit } from '@angular/core';
import { Cart } from '../cart';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart : Cart = new Cart();
  response : any;
  item:string;
  price:number;
  quantity:number;
  total:number;
  couponCode:string;


  constructor(private cartService : CartService , private router : Router) { }

  ngOnInit() { }


  public saveCart(){
    this.cart.item=this.item;
    this.cart.price=this.price;
    this.cart.quantity=this.quantity;
    this.cart.total=this.total;
    this.cart.couponCode=this.couponCode;

    console.log(this.cart);
    this.cartService.saveCart(this.cart).subscribe(
      data =>{
        this.response = data;
        if (this.response == true) {
          this.router.navigateByUrl('/billing');
        }
        console.log(data)
      },
      error =>console.log(error)
    );

  }

}
