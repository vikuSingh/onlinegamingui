import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';  
import { Observable } from 'rxjs'; 

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private CART_URL="http://localhost:5050/onlinegaming/cart"
  constructor(private httpClient : HttpClient) { }

  public saveCart(cart) : Observable<any> {
   return this.httpClient.post<any>(this.CART_URL+"/save",cart, httpOptions);
  }
 
}
