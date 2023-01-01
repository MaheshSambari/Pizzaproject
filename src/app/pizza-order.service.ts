import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LineItem } from './line-item';
import { Pizzaorders } from './pizzaorders';
import { PlaceOrder } from './place-order';

@Injectable({
  providedIn: 'root'
})
export class PizzaOrderService {
   
  constructor(private http:HttpClient) { }

  placeOrder(order: PlaceOrder<LineItem>):Observable<any[]> {
    return this.http.post<any[]>('http://localhost:8080/pizzaOrder',order)
  }

  public getPizzaorders():Observable<any[]>{
    return this.http.get<any[]>('http://localhost:8080/pizzaorder')
 
   }

   public getPizzaordersById(pizzaorderId:any):Observable<Pizzaorders[]>{
     return this.http.get<Pizzaorders[]>('http://localhost:8080/pizzaorder/'+pizzaorderId)
   }


   public getPizzaordersByCustomerId(customerId:any):Observable<Pizzaorders[]>{
    return this.http.get<Pizzaorders[]>('http://localhost:8080/pizzaorderbycust/'+customerId)
  }


   public deletePizzaordersById(pizzaorderId:any):Observable<any[]>{
   return this.http.delete<any[]>('http://localhost:8080/pizzaorder/'+pizzaorderId)
   }

   public getPizzaorderByDate(orderDate:any):Observable<Pizzaorders[]>
   {
     return this.http.get<Pizzaorders[]>('http://localhost:8080/pizzaorderDate/'+orderDate)
   }
   


}
