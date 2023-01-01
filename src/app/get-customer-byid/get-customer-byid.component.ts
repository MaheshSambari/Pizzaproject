import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { UserLogin } from '../user-login';

@Component({
  selector: 'app-get-customer-byid',
  templateUrl: './get-customer-byid.component.html',
  styleUrls: ['./get-customer-byid.component.css']
})
export class GetCustomerByidComponent implements OnInit {

  constructor(private cService:CustomerService) { }

  ngOnInit(): void {
  }

  userModel:UserLogin=new UserLogin('','')
  customer=new Customer(0,'','','','default',this.userModel)
  public result:any
  getById(customer1:any){

   // alert()
    console.log(customer1.customerId)
    this.cService.getSingleCustomer(customer1.customerId).subscribe(data=>{
      console.log(data)
      this.customer=data
      this.result=data 
  //     if(this.customer.customerId==0){
  //       this.customer=new Customer(0,'','','','default',this.user)
  //        this.result=data;
  //  }
    
    // error=>{
    //   console.log(error)
    //   this.result=error.error
    //   this.customer=new Customer(0,'','','','default',this.user)
     })

  }

}