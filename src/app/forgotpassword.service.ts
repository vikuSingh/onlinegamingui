import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const httpOptions={
  headers:new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ForgotpasswordService {
  private password_url="http://localhost:8080/onlinegaming/"
  constructor(private httpClient:HttpClient) { }
    public updatePassword(forgotpassword): Observable<any>{

    return this.httpClient.put<any>(this.password_url+"login", forgotpassword, httpOptions);
}
  }


