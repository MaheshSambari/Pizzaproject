import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { UserLogin } from '../user-login';

@Component({
  selector: 'app-delete-account',
  templateUrl: './delete-account.component.html',
  styleUrls: ['./delete-account.component.css']
})
export class DeleteAccountComponent implements OnInit {

  constructor(private cService:CustomerService,private router:Router) { }

  public cid:any
  public convertCid:any
  userModel=new UserLogin('','')
  customer=new Customer(0,'','','','',this.userModel)
  
  
  ngOnInit(): void {
    this.cid=localStorage.getItem('customerId');
     console.log(this.cid)
     this.convertCid=Number(this.cid)
     console.log(typeof this.convertCid)
     this.deleteCustomer(this.convertCid)
     localStorage.removeItem('customerId')
     this.router.navigateByUrl('/mainmenu')


  }


  deleteCustomer(customerId:any){
    return this.cService.deleteCustomer(customerId).subscribe(data=>{
      console.log(data)
      //alert('Deleting of your is successfull')
      //this.deleteMessage=data,
      //this.getAllCustomers()
          }, error=>console.log(error))


  }


}