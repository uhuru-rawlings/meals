import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class SignupService {
  BASE_URL:string=environment.BASE_URL

  constructor(private http:HttpClient) { }
  adduser(credentials:any):Observable<any>{
    let url:string=`${this.BASE_URL}/api/signup`
    return this.http.post<any>(url, credentials)
  }
}
