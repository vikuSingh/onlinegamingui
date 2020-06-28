import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class BillingService {

  private BILLING_URL="http://localhost:5050/onlinegaming/billing/"
  constructor(private httpClient: HttpClient) { }

  public saveBilling(billing): Observable<any>{

    console.log(billing);

    return this.httpClient.post<any>(this.BILLING_URL+"save",billing, httpOptions);

  }
}
