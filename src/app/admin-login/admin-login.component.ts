import { Component, OnInit } from '@angular/core';
import { Admin } from '../admin';
import { AdminService } from '../admin.service';
import { FormBuilder,FormGroup,FormControl,Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(private aservice:AdminService,private fb:FormBuilder,private router:Router) { }

  ngOnInit(): void {
  }

  login:Admin=new Admin('','','')
  
  public result:any

  validateAdmin(loginadmin:any)
  {
     console.log(loginadmin.value)
     this.aservice.admin(loginadmin.value).subscribe(
        data=>{
          console.log(data)
          this.result=data
          this.resetForm(loginadmin);
          if(this.result.successMessage.length!=0){
            this.router.navigateByUrl('/adminhome')
          }
        },
        error=>
        {
          console.log(error.status)
          this.login=new Admin('','','')
        }
      )
  }
  resetAdminPassword(){
    
    this.router.navigate(['/adminpasswordreset'])
  }

  resetForm(login:NgForm){
    login.reset();

  }

}
