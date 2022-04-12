import { Component, OnInit } from '@angular/core';
import { SignupService } from '../services/signup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  clientname= ''
  useremail = ''
  contact = ''
  passwords = ''
  confirmpasswords = ''
  returned = ''
  constructor(private SignupService:SignupService, private router:Router) { }

  ngOnInit(): void {
  }
  signupuser(){
    let credentials = {
        'customername':this.clientname,
        'useremail':this.useremail,
        'contact':this.contact,
        'password':this.passwords
    }
    this.SignupService.adduser(credentials).subscribe((data) =>{
      if(data == 'Account created successfully!'){
        this.router.navigate(['/login'])
      }else{
        this.returned = data
      }
    })
  }
}
