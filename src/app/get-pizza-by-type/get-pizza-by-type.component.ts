import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pizza } from '../pizza';
import { PizzaService } from '../pizza.service';

@Component({
  selector: 'app-get-pizza-by-type',
  templateUrl: './get-pizza-by-type.component.html',
  styleUrls: ['./get-pizza-by-type.component.css']
})
export class GetPizzaByTypeComponent implements OnInit {

  public pizza:any=[];
  public msg:any;
  pizza2 = new Pizza('','','default','','','');
  public hasError: boolean=true;
  pizzaTypes =['Veg','Non-Veg'];
  
  constructor(private pservice:PizzaService,private router:Router) { }

  ngOnInit(): void {
  }
  
  validatePizza(pizzaType:string){
    if(pizzaType=='default'){
    this.hasError=true;
      }
      else {
        this.hasError=false;
      }
   
   }

   
  getPizzaByType(pizza1:any){
    console.log(pizza1.pizzaType)
    this.pservice.getPizzaByType(pizza1.pizzaType).subscribe(
      data=>{
        console.log(data);
        this.pizza=data;
        this.msg='';
       },
       error=>{
         console.log(error);
         this.msg=error.error.message;
       })
      }

  addToCart(pizzaId:Number)
     {
   this.router.navigate(['/addtocart',pizzaId]);
  }
  
  }
  