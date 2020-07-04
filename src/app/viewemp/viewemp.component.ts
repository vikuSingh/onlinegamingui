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
  responseList: any;

  constructor(private employeeService: EmployeeRegistrationService) { }

  ngOnInit() {
    this.getEmpDetails();
  }

  public getEmpDetails() {
    this.employeeService.getEmp().subscribe(
      data => {
        this.response = data;
        this.responseList = this.response;
      },
      error => console.log(error));
  }
}