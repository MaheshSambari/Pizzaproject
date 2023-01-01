import { Component, OnInit } from '@angular/core';
import { PizzaOrderService } from '../pizza-order.service';

@Component({
  selector: 'app-c-get-pizzaorders',
  templateUrl: './c-get-pizzaorders.component.html',
  styleUrls: ['./c-get-pizzaorders.component.css']
})
export class CGetPizzaordersComponent implements OnInit {
  cust: any;
  public msg:any;
  public pizzaorders:any=[];


  constructor(private poservice:PizzaOrderService) { }

  ngOnInit(): void {
    this.cust=localStorage.getItem("customerId");
    this.poservice.getPizzaordersByCustomerId(Number(this.cust)).subscribe(
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
