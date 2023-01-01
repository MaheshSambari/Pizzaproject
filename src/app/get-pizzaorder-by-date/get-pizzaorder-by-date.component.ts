import { Component, OnInit } from '@angular/core';
import { PizzaOrderService } from '../pizza-order.service';

@Component({
  selector: 'app-get-pizzaorder-by-date',
  templateUrl: './get-pizzaorder-by-date.component.html',
  styleUrls: ['./get-pizzaorder-by-date.component.css']
})
export class GetPizzaorderByDateComponent implements OnInit {

  constructor(private poservice:PizzaOrderService){ }

  ngOnInit(): void {
  }

  // order = new Order(0,'','',0)
  // pizza = new Pizza(0,'','','','')
  // pizzaorders:any=new Pizzaorders(0,'','','','','',this.pizza,this.order)
  pizzaorder:any=[];
  public msg:any;

  getPizzaOrderByDate(pizzaorder1:any){
    console.log(pizzaorder1.pizzaOrderDate)
       this.poservice.getPizzaorderByDate(pizzaorder1.pizzaOrderDate).subscribe(
         data=>{
           //console.log(data)
           this.pizzaorder=data
           this.msg='';
           if(this.pizzaorder.message.length!=0){
           this.msg=data;
           this.pizzaorder=[];
         }
        })
    
  }
}
