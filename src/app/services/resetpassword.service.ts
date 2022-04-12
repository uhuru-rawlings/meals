import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ResetpasswordService {
  BASE_URL:string=environment.BASE_URL

  constructor(private http:HttpClient) { }
  resetpassword(credentials:any){
    let url:string=`${this.BASE_URL}/api/reset/password`
    return this.http.post<any>(url, credentials)
  }
}
