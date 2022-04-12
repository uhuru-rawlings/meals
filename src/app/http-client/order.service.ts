import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class OrderService {
  BASE_URL:string=environment.BASE_URL
  url:string=`${this.BASE_URL}/api/orders/createmulti/`
  constructor(private http:HttpClient) { }

public create_order(data:any):Observable<any[]>{

  return this.http.post<any[]>(this.url,data)
}

}
