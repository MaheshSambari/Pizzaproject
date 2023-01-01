import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../pizza.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-pizza',
  templateUrl: './get-pizza.component.html',
  styleUrls: ['./get-pizza.component.css']
})
export class GetPizzaComponent implements OnInit {
  
  public result:any;
  public sresult:any;
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


  deletePizza(pizzaId:Number){
    this.pservice.deletePizza(pizzaId).subscribe(
    data=>{
      console.log(data);
      this.result=data;
      this.getPizza();
      if(this.result.successMessage.length!=0){
        this.result='';
        this.sresult=data;
      }
     }

  )
    }

  updateCost(pizzaId:Number)
  {
   this.router.navigate(['/update',pizzaId]);
  }
}
