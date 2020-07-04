import { Component, OnInit } from '@angular/core';
import { EmployeeRegistrationService } from '../employeeRegistration.service';

@Component({
  selector: 'app-viewemp',
  templateUrl: './viewemp.component.html',
  styleUrls: ['./viewemp.component.css']
})
export class ViewempComponent implements OnInit {
  response: any;
  responseerror: any;
  employeeServise: any;
  responseList: any;

  constructor(private empregservice: EmployeeRegistrationService) { }

  ngOnInit() {
    this.getEmpDetails();
  }

  public getEmpDetails() {
    this.employeeServise.getEmp().subscribe(
      data => {
        this.response = data;
        console.log("Testing" + this.response);
        this.responseList = this.response;
        console.log(this.responseList);
      },
      error => console.log(error));
  }
}