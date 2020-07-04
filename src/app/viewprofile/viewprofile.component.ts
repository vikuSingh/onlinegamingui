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
        console.log( "Testing" +this.response);
        this.responseList = this.response;
        console.log(this.responseList);
      },
      error=>console.log(error));     
 }
  

}
