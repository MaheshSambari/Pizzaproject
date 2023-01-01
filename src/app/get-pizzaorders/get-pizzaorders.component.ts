import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PizzaOrderService } from '../pizza-order.service';


@Component({
  selector: 'app-get-pizzaorders',
  templateUrl: './get-pizzaorders.component.html',
  styleUrls: ['./get-pizzaorders.component.css']
})
export class GetPizzaordersComponent implements OnInit {

  constructor(private poservice : PizzaOrderService,private router: Router) {}

  public pizzaorder:any=[]
  ngOnInit(): void {
  this.getpizzaorders()
  }

  getpizzaorders(){
    this.poservice.getPizzaorders().subscribe(
      data=>{ 
        console.log(data);
        this.pizzaorder=data
    })
  }
public result:any

   deletePizzaorders(pizzaorderId:any){
  this.poservice.deletePizzaordersById(pizzaorderId).subscribe(
  data=>{
    console.log(data)
    this.result=data
    this.ngOnInit();
   }
  )
}
}
