import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Admin } from '../admin';
import { AdminService } from '../admin.service';


@Component({
  selector: 'app-admin-password-reset',
  templateUrl: './admin-password-reset.component.html',
  styleUrls: ['./admin-password-reset.component.css']
})
export class AdminPasswordResetComponent implements OnInit {

  constructor(private fb:FormBuilder,private aservice:AdminService,private activatedroute:ActivatedRoute,private route:Router) { }

  ngOnInit(): void {
  }
  
  reset:any=new Admin('','','')
  public msg:any
  public smsg:any;
  

  resetAdminPassword(admin:any)
  {
    console.log(admin.value)
    this.aservice.reset(admin.value).subscribe(
      data=>{
        console.log(data)
        this.msg=data
        this.smsg='';
        this.resetForm1(admin);
        if(this.msg.successMessage.length!=0){
          this.smsg=data
          this.msg='';
          this.resetForm1(admin);
        }

        }
      
    )

  }

  adminLoginBtn() {
    this.route.navigateByUrl('/adminlogin');
  };  
  
  
  resetForm1(reset:NgForm){
    reset.reset();

  }

 
}
