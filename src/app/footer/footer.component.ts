import { Component, OnInit } from '@angular/core';
import { NewsletterService } from '../services/newsletter.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  emailadress = ''
  success = ''
  error = ''
  constructor(private NewsletterService:NewsletterService) { }

  ngOnInit(): void {
  }
  addemail(){
    let email = {
      'newslater':this.emailadress
    }
    this.NewsletterService.signupnewslatter(email).subscribe((data) =>{
      if(data == 'signup successfull.'){
         this.success = data
      }else{
          this.error = data
      }
    })
  }
}
