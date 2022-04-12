import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class MenuItemService {
  BASE_URL:string=environment.BASE_URL
  url:string=`${this.BASE_URL}/api/getfiewmenu/`
  constructor(private http:HttpClient) { }
  getmenu():Observable<any>{
    return this.http.get(this.url)
  }

}
