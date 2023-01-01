import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,FormControl,Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserLogin } from '../user-login';
import { UserService } from '../user.service';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private fb:FormBuilder,private uservice: UserService,private router:Router) { }

  ngOnInit(): void {
  }
  // loginForm=this.fb.group({
  //   userid : ['',[Validators.required,Validators.pattern('\\d{5}')]],
  //   userpassword:['',[Validators.required,Validators.minLength(5)]]  
   
  //  })
   
  public userModel=new UserLogin('','')
   
   public result:any
   getLogin(login:any){
     console.log(login.value)
    this.uservice.login(login.value).subscribe(
      data=>{
        console.log(data)
         this.result=data
         this.resetForm(login);

         if(this.result>0){
           localStorage.setItem("customerId",JSON.stringify(this.result));
        this.router.navigate(['/home'])
      }
       },
       error=>{
         console.log(error)
       }
     )
}

createAccount(){
  this.router.navigate(['/register'])
}
resetPassword(){
    
  this.router.navigate(['/userpasswordreset'])
}

 resetForm(login:NgForm){
   login.reset();
 }


}
