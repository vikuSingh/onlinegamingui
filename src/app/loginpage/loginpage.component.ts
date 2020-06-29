import { Component, OnInit } from '@angular/core';
import { Login } from '../login';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {
  login:Login=new Login();
   response:any;
   email:string;
   password:string;
   errormsg:string;

  constructor(private loginservice:LoginService,private router: Router) { }

  ngOnInit() {
  }
  public getLogin(){
    this.login.email=this.email;
    this.login.password=this.password;
    console.log(this.login);
    this.loginservice.getLogin(this.login).subscribe(
      data=> {
        this.response = data; 
        if (this.response==true) {
          this.router.navigateByUrl('/sidenav');
        }else {
          this.errormsg="INVALID USERNAME AND PASSWORD..!";
          console.log(this.errormsg)
        } 
      },
      error => console.log(error));
  }
  forgot(){
    console.log("button click");
    document.getElementById("testing");

    }
  } 

