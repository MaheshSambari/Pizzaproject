import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Pizza } from '../pizza';
import { PizzaService } from '../pizza.service';

@Component({
  selector: 'app-add-pizza',
  templateUrl: './add-pizza.component.html',
  styleUrls: ['./add-pizza.component.css']
})
export class AddPizzaComponent implements OnInit {

  public result:any;
  public sresult:any;
  pizzaModel = new Pizza('','','default','','','');
  public hasError: boolean=true;
  pizzaTypes =['Veg','Non-Veg']

  constructor(private pservice:PizzaService) { }
  
  ngOnInit(): void {  }
 
  validatePizza(pizzaType:string){
    if(pizzaType=='default'){
    this.hasError=true;
      }
      else {
        this.hasError=false;
      }
   
   }

  addPizza(pizza:any){
   this.pservice.savePizza(pizza.value).subscribe(
      data=>{
        console.log(data);
        this.result=data;
        this.sresult='';
        this.resetForm(pizza);
        if(this.result.successMessage.length!=0){
          this.sresult=data;
          this.result='';
        }
       })
     }

    resetForm(pizza:NgForm){
      pizza.reset();

    }

  }
