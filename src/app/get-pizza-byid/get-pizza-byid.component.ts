import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pizza } from '../pizza';
import { PizzaService } from '../pizza.service';

@Component({
  selector: 'app-get-pizza-byid',
  templateUrl: './get-pizza-byid.component.html',
  styleUrls: ['./get-pizza-byid.component.css']
})
export class GetPizzaByidComponent implements OnInit {

  pizza:any=new Pizza(0,'','','','','');
  public msg:any;
  result: any;
  sresult: any;

  constructor(private pservice:PizzaService,private router:Router) { }

  ngOnInit(): void { }


getPizzaById(pizza1:any){
      console.log(pizza1.pizzaId);
      this.pservice.getPizzaById(pizza1.pizzaId).subscribe(
        data=>{
          console.log(data);
          this.pizza=data;
          this.msg='';},
        error=>{
         console.log(error);
         this.msg=error.error.message;
         this.pizza=new Pizza(0,'','','','','');
     })
   }


  updateCost(pizzaId:Number)
  {
   this.router.navigate(['/update',pizzaId]);
  }

}
