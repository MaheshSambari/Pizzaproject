import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from './admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpClient:HttpClient) { }

  public admin(admin:Admin):Observable<any[]>
  {
     return this.httpClient.post<any[]>('http://localhost:8080/adminlogin',admin)
  }
  public reset(admin:Admin):Observable<any[]>
  {
    return this.httpClient.put<any[]>('http://localhost:8080/adminpasswordreset',admin)

  }
}
