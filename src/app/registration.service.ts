import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  private REG_URL = "http://localhost:5050/onlinegaming/registration";
  constructor(private httpClient : HttpClient) { }

  public regdtls(registration) : Observable<any> {
    return this.httpClient.post<any>(this.REG_URL+"/save",registration,httpOptions);
  }

 /*  public regdtls()() : Observable<any> {
    return this.httpClient.get<any>(this.CONTACT_URL+"/retrive");
  } */

}
  
