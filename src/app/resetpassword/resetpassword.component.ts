import { Component, OnInit } from '@angular/core';
import { ResetpasswordService } from '../services/resetpassword.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {
  useremail = ''
  password = ''
  confirmpassword = ''
  constructor(private ResetpasswordService:ResetpasswordService, private http:Router) { }

  ngOnInit(): void {
  }
  resetpassword(){
    let credentials = {
      'useremail':this.useremail,
      'password':this.password
    }
    this.ResetpasswordService.resetpassword(credentials).subscribe((data) =>{
      console.log(data)
      if(data == 'Password has been reset successfully!!'){
        this.http.navigate(['/login'])
      }
    })
  }
}
