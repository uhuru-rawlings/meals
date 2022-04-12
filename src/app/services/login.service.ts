import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
// import { Http, Headers, RequestOptions, Response } from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  BASE_URL:string=environment.BASE_URL
  url:string=`${this.BASE_URL}/api/login`

  constructor(private http:HttpClient) { }
  login(credentials:any):Observable<any>{
    const httpOptions = {
      withCredentials: true
    };
    return this.http.post<any>(this.url ,credentials,httpOptions)
  }

  getuser(token:any):Observable<any>{
    let url = `${this.BASE_URL}/api/user/`
    return this.http.post(url, token)
  }
}
