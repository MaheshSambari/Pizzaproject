import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PizzaService } from '../pizza.service';

@Component({
  selector: 'app-getpizza-asc',
  templateUrl: './getpizza-asc.component.html',
  styleUrls: ['./getpizza-asc.component.css']
})
export class GetpizzaAscComponent implements OnInit {
  public pizza:any=[];
  public result:any;

  constructor(private pservice : PizzaService,private router: Router) { }
    
    ngOnInit(): void {
      this.getPizza()
    }
  
    getPizza(){
      this.pservice.getPizzaAsc().subscribe(
        data =>{
          this.pizza=data;
        })
    }
    
    addToCart(pizzaId:Number)
  {
   this.router.navigate(['/addtocart',pizzaId]);
  }
}