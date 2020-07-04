import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-viewprofile',
  templateUrl: './viewprofile.component.html',
  styleUrls: ['./viewprofile.component.css']
})
export class ViewprofileComponent implements OnInit {
  response: any;
  responseList: any;

  constructor( private registrationServise:RegistrationService) { }

  ngOnInit() {
  
    this.getProfile();
  }
  public getProfile(){
    this.registrationServise.getRegistration().subscribe(
      data=> {
        this.response = data;
        this.responseList = this.response;
       
      },
      error=>console.log(error));     
 }
  

}
