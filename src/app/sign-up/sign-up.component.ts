import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { Customer } from "../customer";
import { CustomerService } from "../customer.service";
import { UserLogin } from "../user-login";


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private cservice:CustomerService,private router:Router) { }

  ngOnInit(): void {
  }

  public hasError:boolean=true

addresses=['Adilabad',
  'Bhadradri', 'Kothagudem',
  'Hyderabad',
  'Jagtial',
  'Jangaon',
  'Jayashankar Bhoopalpally',
  'Jogulamba Gadwal',
  'Kamareddy',
  'Karimnagar',
  'Khammam',
  'Komaram Bheem', 'Asifabad',
  'Mahabubabad',
  'Mahabubnagar',
  'Mancherial',
  'Medak',
  'Medchal',
  'Nagarkurnool',
  'Nalgonda',
  'Nirmal',
  'Nizamabad',
  'Peddapalli',
  'Rajanna Sircilla',
  'Rangareddy',
  'Sangareddy',
  'Siddipet',
  'Suryapet',
  'Vikarabad',
  'Wanaparthy',
  'Warangal(Rural)',
  'Warangal(Urban)',
  'Yadadri' ,'Bhuvanagiri']

  userModel:UserLogin=new UserLogin('','')
customerModel=new Customer(0,'','','','default',this.userModel)
result:any
sresult:any


registerCustomer(customer:any){
  JSON.stringify(this.customerModel)
  this.cservice.saveCustomer(this.customerModel).subscribe(data=>{
    this.result=data
    this.sresult=''
    this.resetForm(customer);
    // this.userModel=new UserLogin('','')
    // this.customerModel = new customer('','','','default',this.userModel)
    if(this.result.successMessage.length!=0){
      this.sresult=data
      this.result=''
      this.resetForm(customer);
      // this.userModel=new UserLogin('','')
      // this.customerModel = new customer('','','','default',this.userModel)
    }
  },
  error=>{
    console.log(error)
  })
}

validateAddress(address:string){
 if(address=='default'){
 this.hasError=true;
   }
   else {
     this.hasError=false;
   }

}

signIn(){
  this.router.navigate(['/signin'])
}

resetForm(cust:NgForm){
  cust.reset();
}

}
