import { Component, OnInit } from '@angular/core';
import { PizzaOrderService } from '../pizza-order.service';

@Component({
  selector: 'app-get-pizza-orders-by-id',
  templateUrl: './get-pizza-orders-by-id.component.html',
  styleUrls: ['./get-pizza-orders-by-id.component.css']
})
export class GetPizzaOrdersByIdComponent implements OnInit {

  constructor(private poservice:PizzaOrderService) { }

  ngOnInit(): void {
  }
  //order = new Order(0,'','',0)
   //pizza = new Pizza(0,'','','','')
  //pizzaorders:any=new Pizzaorders(0,'','','','','',this.pizza,this.order)
  public msg:any;
  public pizzaorders:any=[];

  getPizzaordersById(pizzaorders1:any){
      //  console.log(pizzaorders1.pizzaorderId)
       this.poservice.getPizzaordersById(pizzaorders1.pizzaorderId).subscribe(
         data=>{
           //console.log(data)
           this.pizzaorders=data
           this.msg='';
           if(this.pizzaorders.message.length!=0){
           this.msg=data;
           this.pizzaorders=[];
           }
         },
        //error=>{
        // console.log(error);
        //this.msg=error.error.message;
        //this.pizzaorders=new Pizzaorders(0,'','','','','',this.pizza,this.order);
        //}
       )
    
  }

}
