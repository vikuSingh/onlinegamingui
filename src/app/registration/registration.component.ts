import { Component, OnInit } from '@angular/core';
import { Registration } from '../registration';
import { RegistrationService } from '../registration.service';
import { RouterEvent, Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registration:Registration=new Registration();
  response:any
  fullName:string;
	fatherName:string;
	email:string;
	gender:string;
	dob:string;
	pinCode:string;
	address:string;
	village:string;
	city:string;
	mobileNumber:string;
	password:string;

  constructor( private registrationServise:RegistrationService,private router: Router) {
  }

  ngOnInit() {
  }

  
  public regdtls() {
    alert("submitted successfully");
    this.registration.fullName = this.fullName;
    this.registration.fatherName = this.fatherName;
    this.registration.email = this.email;
    this.registration.gender=this.gender;
    this.registration.dob= this.dob;
    this.registration.pinCode=this.pinCode;
    this.registration.address=this.address;
    this.registration.village=this.village;
    this.registration.city=this.city;
    this.registration.mobileNumber=this.mobileNumber;
    this.registration.password=this.password;
    console.log(this.registration);
    this.router.navigateByUrl('/login');
    this.registrationServise.regdtls(this.registration).subscribe(
      data=> {
        this.response = data; 
        console.log(data) 
      },
      error => console.log(error));
  }

}
