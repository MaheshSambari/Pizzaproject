import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-get-customers',
  templateUrl: './get-customers.component.html',
  styleUrls: ['./get-customers.component.css']
})
export class GetCustomersComponent implements OnInit {

  constructor(private cservice : CustomerService,private router: Router) { }
  public customers:any=[]
    ngOnInit(): void {
      this.getCustomers()
    }
  
    getCustomers(){
      this.cservice.getCustomers().subscribe(
        data =>{
           console.log(data)
           this.customers=data
        }
        )
    }
  
    public result:any
  
    deletePizza(customerId:Number){
      alert(customerId);
    //   this.cservice.deleteCustomer(customerId).subscribe(
    //   data=>{
    //     console.log(data)
    //     this.result=data
    //     this.getCustomers()
    //    }
  
    // )
      }
  
    updateCost(customerId:Number)
    {
      alert(customerId);
     //this.router.navigate(['/update',pizzaId])
    }
  }
  