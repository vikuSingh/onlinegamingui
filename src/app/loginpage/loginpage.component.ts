import { Component, OnInit } from '@angular/core';
import { dependenciesFromGlobalMetadata } from '@angular/compiler/src/render3/r3_factory';
import { Login } from '../login';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {
  login:Login=new Login();
   response:any;
   username:string;
   password:string;

  constructor(private loginservice:LoginService) { }

  ngOnInit() {
  }
  public getLogin(){
    this.login.username=this.username;
    this.login.password=this.password;
    console.log(this.login);
    this.loginservice.getLogin(this.login).subscribe(
      data=> {
        this.response = data; 
        console.log(data) 
      },
      error => console.log(error));
  }
  forgot(){
    console.log("button click");
    document.getElementById("testing");

    }
  } 

