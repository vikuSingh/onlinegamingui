import { Component, OnInit } from '@angular/core';
import { EmployeeRegistration } from '../employeeRegistration';
import { EmployeeRegistrationService } from '../employeeRegistration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-registration',
  templateUrl: './employee-registration.component.html',
  styleUrls: ['./employee-registration.component.css']
})
export class EmployeeRegistrationComponent implements OnInit {
 
  empregistration:EmployeeRegistration=new EmployeeRegistration();
  
  
  response:string;
  eid:number;
  ename:string;
  address:string;
  age:number;
  email:string;
  phoneNumber:string;
  dob:string;
  gender:string;
  reponseError:any; 
  
   

  constructor(private empregservice:EmployeeRegistrationService,private router: Router) { }

  ngOnInit() {
     this.gender = null;
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
     this.empregservice.empRegister(this.empregistration).subscribe(
      data=> {
        this.response = data;
        if(this.response=="success") {
          this.router.navigateByUrl('/viewemp');
        }else {
          this.reponseError = "Ünable to Save Emp Details..!"
        }
      },
      error => console.log(error));
      
  }

  public empDetails() {
     this.router.navigateByUrl('/viewemp');
  }
  
  
}
