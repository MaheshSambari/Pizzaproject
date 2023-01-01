import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pizza } from './pizza';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {
  
  constructor(private http:HttpClient) { }

  public getPizza():Observable<any[]>{
     return this.http.get<any[]>('http://localhost:8080/getpizza')
  
    }
    public savePizza(pizza:Pizza):Observable<any[]>{
      return this.http.post<any[]>('http://localhost:8080/savepizza',pizza)
   
     }
     public deletePizza(pizzaId:Number):Observable<String>{
      return this.http.delete<String>('http://localhost:8080/deletepizza/'+pizzaId)
     }
     public getPizzaById(pizzaId:Number):Observable<Pizza[]>{
      return this.http.get<Pizza[]>('http://localhost:8080/getpizzabyid/'+pizzaId)
   
     }
     public updatePizza(pizza:Pizza):Observable<any[]>{
      return this.http.put<any[]>('http://localhost:8080/updatepizza',pizza)
   
     }
     public getPizzaAsc():Observable<any[]>{
      return this.http.get<any[]>('http://localhost:8080/getpizzaAsc')
   
     }
     public getPizzaDesc():Observable<any[]>{
      return this.http.get<any[]>('http://localhost:8080/getpizzaDesc')
   
     }
     public getPizzaByType(pizzaType:any):Observable<Pizza[]>{
      return this.http.get<any[]>('http://localhost:8080/getpizzabytype/'+pizzaType)
   
     }

}