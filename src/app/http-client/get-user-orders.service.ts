import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class GetUserOrdersService {
  BASE_URL:string=environment.BASE_URL
  constructor(private http:HttpClient) { }
  
public get_user_orders(userid:any):Observable<any>{
  console.log(userid)
  
  let url=`${this.BASE_URL}/api/user/${userid}/orders/`
  return this.http.get<any[]>(url)


}
}
