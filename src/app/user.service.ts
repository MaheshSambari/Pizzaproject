import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pizza } from './pizza';
import { UserLogin } from './user-login';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  public login(user:UserLogin):Observable<any[]>{
    return this.http.post<any[]>('http://localhost:8080/userlogin',user)
  }
  public reset(user:UserLogin):Observable<any[]>{
    return this.http.put<any[]>('http://localhost:8080/userpasswordreset',user)
  }
  
  }
