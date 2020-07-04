import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');

@Injectable({
  providedIn: 'root'
})
export class EmployeeRegistrationService {

  private EMPLOYEE_URL = "http://localhost:5050/onlinegaming/employee";
  
  constructor(private httpClient: HttpClient) { }

  public empRegister(employeeRegistration): Observable<any> {
    return this.httpClient.post<any>(this.EMPLOYEE_URL + "/save", employeeRegistration, {headers,responseType: 'text' as 'json' });

  }
  public getEmp(): Observable<any> {
    return this.httpClient.get<any>(this.EMPLOYEE_URL + "/getEmp");
  }
}