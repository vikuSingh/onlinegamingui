import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
const httpOptions={
  headers:new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private Login_url="http://localhost:8080/onlinegaming/"

  constructor(private httpClient:HttpClient) { }
  public getLogin(login): Observable<any>{
    return this.httpClient.get<any>(this.Login_url+"login", login);
  }
}
