import { Component, OnInit } from '@angular/core';
import { EmployeeRegistration } from '../employeeRegistration';
import { EmployeeRegistrationService } from '../employeeRegistration.service';

@Component({
  selector: 'app-employee-registration',
  templateUrl: './employee-registration.component.html',
  styleUrls: ['./employee-registration.component.css']
})
export class EmployeeRegistrationComponent implements OnInit {


  empregistration:EmployeeRegistration=new EmployeeRegistration();
  response:any;
  eid:number;
  ename:string;
  address:string;
  age:number;
  email:string;
  phoneNumber:string;
  dob:string;
  gender:string;
   
  constructor(private empregservice:EmployeeRegistrationService) { }

  ngOnInit() {

  }
  public empRegister() {
      
     this.empregistration.eid=this.eid;
     this.empregistration.ename=this.ename;
     this.empregistration.address=this.address;
     this.empregistration.age=this.age;
     this.empregistration.email=this.email;
     this.empregistration.phoneNumber=this.phoneNumber;
     this.empregistration.dob=this.dob;
     this.empregistration.gender=this.gender;


    console.log(this.empregistration);
    this.empregservice.empRegister(this.empregistration).subscribe(
      data=> {
        this.response = data; 
        console.log(data) 
      },
      error => console.log(error));
  }

  

}
