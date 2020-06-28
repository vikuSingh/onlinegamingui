import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  
}
@Injectable({
  providedIn: 'root'
})
export class EmployeeRegistrationService {

  private EMPLOYEE_URL="http://localhost:5050/onlinegaming/employee";

  constructor( private httpClient: HttpClient) { }

  public empRegister(employeeRegistration): Observable<any>{

    return this.httpClient.post<any>(this.EMPLOYEE_URL+"/save",employeeRegistration, httpOptions);

  }
}
