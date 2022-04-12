import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class NewsletterService {
  BASE_URL:string=environment.BASE_URL

  constructor(private http:HttpClient) { }
  signupnewslatter(emailadress:any):Observable<any>{
    let url:string=`${this.BASE_URL}/api/newsletter/`
    return this.http.post(url, emailadress)
  }
}
