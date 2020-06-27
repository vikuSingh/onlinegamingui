import { Component, OnInit } from '@angular/core';
import { Forgotpassword } from '../forgotpassword';
import { ForgotpasswordService } from '../forgotpassword.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  forgotpassword:Forgotpassword= new Forgotpassword();
  response:any;
  username:string;
  password:string;
  confirmPassword:string;

  constructor(private forgotpasswordservice:ForgotpasswordService) { }

  ngOnInit() {
  }
  public updatepassword(){
    this.forgotpassword.username=this.username;
    this.forgotpassword.password=this.password;
    this.forgotpassword.confirmPassword=this.confirmPassword;

    console.log(this.forgotpassword)
    this.forgotpasswordservice.updatePassword(this.forgotpasswordservice).subscribe(
      data=> {
        this.response = data; 
        console.log(data) 
      },
      error => console.log(error));
    }

}
