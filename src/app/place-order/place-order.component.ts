import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LineItemService } from '../line-item.service';
import { PizzaOrderService } from '../pizza-order.service';
import { PlaceOrder } from '../place-order';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.css']
})
export class PlaceOrderComponent implements OnInit {
  result: any;
  sresult: any;
  customerId=Number(localStorage.getItem("customerId"));
  public placeModel = new PlaceOrder('','',this.customerId,'default');
  public hasError:boolean=true;
  cust: any;
  cart1:any=[];;

  constructor(private pservice:PizzaOrderService,private lservice:LineItemService,private router:Router) { }
  ngOnInit(): void {
    
    this.cust=localStorage.getItem("customerId");
    console.log(typeof(Number(this.cust)));
    this.lservice.getCart(Number(this.cust)).subscribe(
      data=>{
          console.log(data);
          this.cart1=data;         
          if(this.cart1.message.length!=0){
          this.router.navigate(['/customergetpizza']);
          }
        })

  }


  transactionmodes=['Paytm','Phone pe','Amazon','Google Pay','Net Banking','Debit/Credid card','Cash On Delivery','Order Pay Later'];

  validateTransaction(transaction:string){
    if(transaction=='default'){
    this.hasError=true;
      }
      else {
        this.hasError=false;
      }   
   }


   placeOrder(order:any){
       console.log(this.placeModel);
       this.pservice.placeOrder(this.placeModel).subscribe(data=>{
           console.log(data);
           this.result=data;
           this.sresult='';
           this.resetForm(order);
           if(this.result.successMessage.length!=0){
               this.sresult=data;
               this.result='';
               this.resetForm(order);
     }
    },
     error=>{
      console.log(error);
        })
    }

 resetForm(placeorder:NgForm){
   placeorder.reset();
 }

}
