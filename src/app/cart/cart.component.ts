import { Component, OnInit,Input } from '@angular/core';
import { OrderService } from '../http-client/order.service';
import { CookieService } from 'ngx-cookie-service';
import { LoginService } from '../services/login.service';
import { UserloginService } from '../services/userlogin.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @Input() menu:any;
  cart:any[] =[]
  cartTotal:any=0
  user:any;
  user_obj:any;
  constructor(private toastr: ToastrService,private orderservice:OrderService,private CookieService:CookieService, public LoginService:LoginService, private UserloginService:UserloginService) { }

  ngOnInit(): void {
    this.update_cart()

    this.get_order_total()
  }

total_cart(value:String){

}
get_qty(item:any,quantity:any){
  let itemId=document.getElementById(item)
  this.update_quantity(item,quantity)
  //alert(itemId.value)
  if (itemId){
    // alert(quantity)
  }
}

update_cart(){
  try{
  this.cart=JSON.parse(localStorage.getItem("cart") || "")
  //this.cartItemCount=cart.length

  }
  
  catch{
    console.log('Cart is Empty')
    //localStorage.setItem("cart",JSON.stringify(this.cart))
  }
}

update_quantity(id:any,qty:any){

  let current_cart=JSON.parse(localStorage.getItem("cart") || "")
  for (let item of current_cart){
    if (item.id==id){
      item.qty=qty
    }

  }
  this.cart=current_cart
  localStorage.setItem("cart",JSON.stringify(this.cart))
  this.get_order_total()
 
}

get_order_total(){
  let current_cart=JSON.parse(localStorage.getItem("cart") || "")
  let sum=0
  for (let item of current_cart){
    sum += item.price * item.qty
  }
  this.cartTotal=sum
}

empty_cart(){
  
  this.cart=[]
  localStorage.setItem('cart',JSON.stringify(this.cart))
  this.cartTotal=0

}




submit_order(){

  try{
    let customer:any=this.UserloginService.user
    console.log('logged in');

    let confirmed=confirm('Place the order?')
    if (!confirmed){
      return
  
    }
    let current_order=JSON.parse(localStorage.getItem("cart") || "")
  
    let requestData={
  
      "customer_id":customer.id,
      "order_total_price":this.cartTotal,
      "order-items":this.cart
    }
  
    this.orderservice.create_order(requestData).subscribe((data)=>{
  
      this.empty_cart()
      this.toastr.success('Order submited successfully')
    })
  }
  catch{
    this.toastr.warning('please login to place an order')
  }



}
deleteItem(id:any){
  let cart:any = localStorage.getItem('cart')
  let cartItem = JSON.parse(cart)
  let itemindex:any
  console.log(cartItem.length)
  cartItem.forEach((x:any)=>{
    if(x.id == id){
      itemindex = cartItem.indexOf(x)
    }
  })
  
  cartItem.splice(itemindex,1)

let finalItems = JSON.stringify(cartItem)
  localStorage.setItem('cart',finalItems)
  window.location.reload()
}

}
