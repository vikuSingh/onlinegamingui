import { Component, OnInit } from '@angular/core';
import { Forgotpassword } from '../forgotpassword';
import { ForgotpasswordService } from '../forgotpassword.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  forgotpassword:Forgotpassword= new Forgotpassword();
  response:any;
  email:string;
  password:string;
  confirmPassword:string;
  errormsg:string;

  constructor(private forgotpasswordservice:ForgotpasswordService ,private Router:Router) { }

  ngOnInit() {
  }
  public update(){
    this.forgotpassword.email=this.email;
    this.forgotpassword.password=this.password;
    this.forgotpassword.confirmPassword=this.confirmPassword;

    console.log(this.forgotpassword)
    this.forgotpasswordservice.update(this.forgotpassword).subscribe(
      data=> {
        this.response = data; 
        if (this.response==true) {
          this.Router.navigateByUrl('/login');
        }else {
          this.errormsg="PASSWORD NOT MATCHED..!";
          console.log(this.errormsg)
        console.log(data) 
      }
    },
      error => console.log(error));
    }

}
