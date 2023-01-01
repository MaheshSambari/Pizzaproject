import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PizzaService } from '../pizza.service';

@Component({
  selector: 'app-c-get-all-pizzas',
  templateUrl: './c-get-all-pizzas.component.html',
  styleUrls: ['./c-get-all-pizzas.component.css']
})
export class CGetAllPizzasComponent implements OnInit {

  public result:any;
  public pizza:any=[];


  constructor(private pservice : PizzaService,private router: Router) { }
   
  ngOnInit(): void {
    this.getPizza();
  }

  getPizza(){
    this.pservice.getPizza().subscribe(
      data => {this.pizza=data;}
      )
  }


  addToCart(pizzaId:Number)
  {
   this.router.navigate(['/addtocart',pizzaId]);
  }
}
