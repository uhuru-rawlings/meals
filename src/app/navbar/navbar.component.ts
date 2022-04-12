import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { LoginService } from '../services/login.service';
import { UserloginService } from '../services/userlogin.service';
import { OrderService } from '../order-service/order.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user:any
  user_obj:any
  cart:any
  logins:any
  constructor(private toastr: ToastrService,public CookieService:CookieService, private OrderService:OrderService, public LoginService:LoginService, private UserloginService:UserloginService) { }
  @Output() loggedUser=new EventEmitter<any>(); 
  ngOnInit(): void {
    this.getuser()
    this.logedinuser()
    this.logcookie()
  }
  logcookie(){
    let cookies = this.CookieService.get("jwt")
    console.log(cookies)
  }
  getuser(){
      let user = this.CookieService.get('jwt')
      let token = {
        'jwt':user
      }
      this.LoginService.getuser(token).subscribe((data) => {
        this.user_obj = data
        this.setuser()
        this.setcart()
        this.setorderuser()
        this.loggedUser.emit(this.user_obj)
      })
  }
  setuser(){
    this.UserloginService.loginuser(this.user_obj)
  }
  setcart(){
    this.UserloginService.getcart()
    this.cart = this.UserloginService.cart_total
  }
  setorderuser(){
    this.OrderService.getuserid(this.user_obj)
  }
  logedinuser(){
    let loginnew = this.CookieService.get("jwt")
    if(loginnew){
      this.logins = loginnew
    }else{
      this.logins = "nouser"
    }
    console.log(this.CookieService.get("jwt"))
  }

  logoutuser(){
    let loginnew = this.CookieService.get("jwt")
    if(loginnew){
      this.CookieService.delete("jwt")
      this.toastr.info("user logged out successfully")
    }else{
    }
  }
}
