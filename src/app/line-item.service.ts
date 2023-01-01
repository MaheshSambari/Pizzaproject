import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LineItem } from './line-item';

@Injectable({
  providedIn: 'root'
})
export class LineItemService {

  constructor(private http:HttpClient) { }
  
  addItem(ItemModel: LineItem):Observable<any[]> {
    return this.http.post<any[]>('http://localhost:8080/addtocart',ItemModel)
  }

  public deleteItemById(Id:Number):Observable<String>{
    return this.http.delete<String>('http://localhost:8080/deletecartbysno/'+Id)
   }
   public getItemById(Id:Number):Observable<LineItem[]>{
    return this.http.get<LineItem[]>('http://localhost:8080/getcartbysno/'+Id)
 
   }
   public updateItem(lineItem:LineItem):Observable<any[]>{
    return this.http.put<any[]>('http://localhost:8080/updatecartbysno',lineItem)
 
   }

  getCart(Id: number):Observable<LineItem[]> {
    return this.http.get<LineItem[]>('http://localhost:8080/getcartbycustomer/'+Id)
  }


}
