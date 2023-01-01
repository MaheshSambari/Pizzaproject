import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private url= "http://localhost:8080"

  constructor(private http : HttpClient) { }

  // To register a new customer
  public saveCustomer(customer:Customer):Observable<any[]>{
    return this.http.post<any[]>(this.url+'/customers',customer)
   }

   // To view all customers
   public getCustomers():Observable<any[]>{
    return this.http.get<any[]>(this.url+'/customers')
   }

   // To get a single customer details
  public getSingleCustomer(customerId:Number):Observable<Customer>
  {
    return this.http.get<Customer>(this.url+"/customers/"+customerId)
  }
  //To update a custmer record
  public updateCustomer( customer:Customer):Observable<Customer>
  {
    return this.http.put<Customer>(this.url+"/customers",customer)
  }
   //To delete a registered customer
   public deleteCustomer(customerId:Number):Observable<String>
   {
     return this.http.delete<String>(this.url+"/customers/"+customerId);
   }


}
