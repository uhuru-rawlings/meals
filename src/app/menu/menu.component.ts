import { Component, OnInit } from '@angular/core';
import { MenuService } from '../http-client/menu.service';
import { AddToCartService } from '../http-client/add-to-cart.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menuList:any;
  cart:{}[] =[]
  cartItemCount:number=0
  menuExists:boolean=false
  constructor(private toastr: ToastrService,private menuService:MenuService,private addToMenuService:AddToCartService) { }

  ngOnInit(): void {
    try{
    let cart=JSON.parse(localStorage.getItem("cart") || "")
    this.cartItemCount=cart.length

    }
    catch{
      localStorage.setItem("cart",JSON.stringify(this.cart))
    }
    this.menuService.getMenu().subscribe(data=>{

      this.menuList=data;

    })
  }

  addToCart(menuItem:any){
this.addToMenuService.addToCart(menuItem);
let cart=JSON.parse(localStorage.getItem("cart") || "")

this.cartItemCount=cart.length
window.location.reload()
  }
}
