import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  token:any
  user:any
  BASE_URL:string=environment.BASE_URL
  constructor(private http:HttpClient) { }

  getuserid(user:any){
    this.user = user
  }
  getOrders():Observable<any>{
    console.log(this.user.id)
    return this.http.get<any>(`${this.BASE_URL}/api/user/${this.user.id}/orders/`)
  }
}
