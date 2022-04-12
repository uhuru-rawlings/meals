import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserloginService {
  user:any
  cart_total:any = 0
  constructor() { }

  loginuser(users:any){
    this.user = users
  }
  
  getcart(){
    let cart=JSON.parse(localStorage.getItem("cart") || "")
    this.cart_total = cart.length
  }

}


