import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserLogin } from '../user-login';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-password-reset',
  templateUrl: './user-password-reset.component.html',
  styleUrls: ['./user-password-reset.component.css']
})
export class UserPasswordResetComponent implements OnInit {

  
  constructor(private uservice: UserService,private router:Router) { }

  ngOnInit(): void {
  }
   
  public userModel=new UserLogin('','')
   
   public result:any
   public sresult:any

   getPasswordReset(login:any){
     console.log(login.value)
    this.uservice.reset(login.value).subscribe(
      data=>{
        console.log(data)
         this.result=data
         this.sresult=''
         this.resetForm(login);
         if(this.result.successMessage.length!=0){
           this.sresult=data;
           this.result=''
          this.resetForm(login);
         }
       },
       error=>{
         console.log(error)
       }
     )
}

  resetForm(login : NgForm){
    login.reset();
  }

  signIn(){
    this.router.navigate(['/signin'])
  }

}
