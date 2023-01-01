import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LineItem } from '../line-item';
import { LineItemService } from '../line-item.service';

@Component({
  selector: 'app-line-item',
  templateUrl: './line-item.component.html',
  styleUrls: ['./line-item.component.css']
})
export class LineItemComponent implements OnInit {

  public Id:any;
  public hasError:boolean=true;
  public hasError1:boolean=true;
  result:any;
  sresult:any;
  customerId=Number(localStorage.getItem("customerId"));
  sizes=['small','medium','large'];
  quantitys=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
  ItemModel = new LineItem('',0,'','default','default','');


  constructor(private lservice:LineItemService,private activatedroute:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    let pizzaid= this.activatedroute.paramMap.subscribe((ParamMap)=>{
      let id=ParamMap.get('id');
      this.Id=Number(id)
      this.ItemModel = new LineItem('',this.Id,this.customerId,'default','default','');
    })
  }
  
  validateSize(size:string){
    if(size=='default'){
    this.hasError=true;
      }
      else {
        this.hasError=false;
      }
   }


   validateQuantity(Quantity1:string){
    if(Quantity1=='default'){
    this.hasError1=true;
      }
      else {
        this.hasError1=false;
      } 
   }


  addItem(lineitem:any){
    //alert();
    console.log(this.ItemModel)
    this.lservice.addItem(this.ItemModel).subscribe(data=>{
      this.result=data;
      this.sresult='';
      this.resetForm(lineitem);
      if(this.result.successMessage.length!=0){
        this.sresult=data;
        this.result='';
        this.resetForm(lineitem);
        this.router.navigate(['/cart']);
      }
    },
    error=>{
      this.result=error.error;
      this.sresult='';
      this.ItemModel = new LineItem('','','','','','');
    })
     }

     resetForm(lineitem:NgForm){
       lineitem.reset();
     }

}
