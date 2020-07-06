import { Component, OnInit } from '@angular/core';
import { Cart } from '../cart';
import { CartService } from '../cart.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart : Cart = new Cart();
  cartDetails : any;
  response : any;
  item:string;
  price:number;
  quantity:number;
  total:number;
  couponCode:string;


  constructor(private cartService : CartService , private router : Router, private route:ActivatedRoute) { 
  this.cartDetails=  this.router.getCurrentNavigation().extras.state;
 
  }

  ngOnInit() {
    //console.log(history.state)
    console.log(this.cartDetails)
    console.log(this.cart)
   }


  public saveCart(){
    this.cart.item=this.cartDetails['item'];
    this.cart.price=this.cartDetails['price'];
    this.cart.quantity=this.cartDetails['quantity'];
    this.cart.total=this.cartDetails['total'];
    this.cart.couponCode=this.couponCode;

    console.log(this.cart);
    this.cartService.saveCart(this.cart).subscribe(
      data =>{
        this.response = data;
        if (this.response == true) {
          this.router.navigateByUrl('/billing', { state: { product:this.cart.item, price: this.cart.price } });
        }
        console.log(data)
      },
      error =>console.log(error)
    );

  }

}
