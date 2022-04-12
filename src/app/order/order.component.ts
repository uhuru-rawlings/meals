import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order-service/order.service';
import { GetUserOrdersService } from '../http-client/get-user-orders.service';
import { UserloginService } from '../services/userlogin.service';
import { CookieService } from 'ngx-cookie-service';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  orders: any
  id:any
  userOrders:any
  user:any;
  activeUser:any
  user_obj:any;
  token:any
  constructor(private router:Router,private CookieService:CookieService,public LoginService:LoginService,private orderService:OrderService,private getUserOrdersService:GetUserOrdersService,private UserloginService:UserloginService) { }

  ngOnInit(): void {
    this.checklogin()
  }

  loadOrders(){
    this.getorders()

  }
  checklogin(){
    let getcookies = this.CookieService.get("jwt");
    if(getcookies){
     console.log(getcookies)
    }else{
      this.router.navigate(['/'])
    }
    // try{
    //   let getcookies = this.CookieService.get("jwt");

    // }catch{
    //   this.router.navigate(['/'])
    // }
  }
  setuser(){
    this.user = this.orderService.user
  }
  getorders(){
    this.setuser()
    this.orderService.getOrders().subscribe((data) =>{
      console.log(data)
      this.orders = data
      // setTimeout("getorders", 3000)
    })
  }


}
