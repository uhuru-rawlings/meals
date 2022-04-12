import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class MenuService {
  BASE_URL:string=environment.BASE_URL
  url:string=`${this.BASE_URL}/api/menu/`
  constructor(private http:HttpClient) { }

public getMenu():Observable<any[]>{

  return this.http.get<any[]>(this.url)
}

}
