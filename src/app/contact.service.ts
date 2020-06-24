import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private CONTACT_URL = "http://localhost:5050/contact";
  constructor(private httpClient : HttpClient) { }


  public saveContact(contact) : Observable<any> {
    return this.httpClient.post<any>(this.CONTACT_URL+"/save",contact,httpOptions);
  }

  public getContact() : Observable<any> {
    return this.httpClient.get<any>(this.CONTACT_URL+"/retrive");
  }

}
