import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PizzaService } from '../pizza.service';

@Component({
  selector: 'app-getpizza-desc',
  templateUrl: './getpizza-desc.component.html',
  styleUrls: ['./getpizza-desc.component.css']
})
export class GetpizzaDescComponent implements OnInit {
  public pizza:any=[];
  public result:any;

  constructor(private pservice : PizzaService,private router: Router) { }
  
  ngOnInit(): void {
    this.getPizza();
  }

  getPizza(){
    this.pservice.getPizzaDesc().subscribe(
      data =>{
         this.pizza=data;
      })
  }


  addToCart(pizzaId:Number)
  {
   this.router.navigate(['/addtocart',pizzaId]);
  }
}

