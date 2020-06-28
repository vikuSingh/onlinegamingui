import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class EventService {
  private EVENT_URL = "http://localhost:5050/onlinegaming/event";
  constructor(private httpClient : HttpClient) { }
  
  public saveEvent(event) : Observable<any> {
    return this.httpClient.post<any>(this.EVENT_URL+"/save",event,httpOptions);
  }

  public getEvent() : Observable<any> {
    return this.httpClient.get<any>(this.EVENT_URL+"/retrive");
  }
}
