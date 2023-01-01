import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { UserLogin } from '../user-login';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {

  constructor(private cService:CustomerService, private route:ActivatedRoute, private router:Router) { }
  public result:any
  //public customerId:any
  public cid:any
  public convertCid:any
  userModel=new UserLogin('','')
  customer=new Customer(0,'','','','',this.userModel)
  public hasError:boolean=false
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

  ngOnInit(): void {

   // this.route.paramMap.subscribe(ParaMap=>{
     // let id= ParaMap.get('customerId')
     // console.log(id)
     // this.customerId=Number(id)
     // console.log(typeof this.customerId)
     this.cid=localStorage.getItem('customerId');
     console.log(this.cid)
     this.convertCid=Number(this.cid)
     console.log(typeof this.convertCid)

     //console.log(typeof(Number(this.cid)));
    

     this.cService.getSingleCustomer(this.convertCid).subscribe(data=>{
       console.log(data)
       this.customer=data

      },
      error=>{console.log(error)})


   // });
  }
  updateCustomer(customer:any){
   console.log(customer.value)
    //JSON.stringify(this.customer)
   this.cService.updateCustomer(customer.value).subscribe(data=>{
    console.log(data)
    this.result=data
    
   })
  // alert('hi')
   alert('Your accout is successfully updaed')
    this.router.navigateByUrl('/home')


  }


  validateAddress(address:string){
    if(address=='default'){
    this.hasError=true;
      }
      else {
        this.hasError=false;
      }
   
    }



}