import { Component, OnInit } from '@angular/core';
import { Pizza } from '../pizza';
import { PizzaService } from '../pizza.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
@Component({
  selector: 'app-update-pizza',
  templateUrl: './update-pizza.component.html',
  styleUrls: ['./update-pizza.component.css']
})
export class UpdatePizzaComponent implements OnInit {

  pizza:any=new Pizza(0,'','','','','');
  public Id:any;
  public result:any;


  constructor(private pservice:PizzaService,private activatedroute:ActivatedRoute,private route:Router) { }
   ngOnInit(): void {
   let pizzaid= this.activatedroute.paramMap.subscribe((ParamMap)=>{
     let id=ParamMap.get('id');
     this.Id=Number(id);
     this.pservice.getPizzaById(this.Id).subscribe(
      data=>{
        console.log(data);
        this.pizza=data;
       },
       error=>{
         console.log(error);
          })
      });
    }


    updatePizza(pizza:any){
       console.log(pizza.value);
       this.pservice.updatePizza(pizza.value).subscribe(
          data=>{
            console.log(data);
            this.result=data;
            this.route.navigateByUrl('/getpizza');
       })
  }


}
