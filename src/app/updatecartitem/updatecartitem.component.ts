import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LineItem } from '../line-item';
import { LineItemService } from '../line-item.service';

@Component({
  selector: 'app-updatecartitem',
  templateUrl: './updatecartitem.component.html',
  styleUrls: ['./updatecartitem.component.css']
})
export class UpdatecartitemComponent implements OnInit {
  public Id:any;
  public hasError:boolean=true;
  public hasError1:boolean=true;
  result:any;
  sresult:any;
  sizes=['small','medium','large'];
  quantitys=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
  ItemModel:any = new LineItem('','','','default','default','');


  constructor(private lservice:LineItemService,private activatedroute:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    let pizzaid= this.activatedroute.paramMap.subscribe((ParamMap)=>{
      let id=ParamMap.get('id');
      this.Id=Number(id);
      this.lservice.getItemById(this.Id).subscribe(
       data=>{
         console.log(data);
         this.ItemModel=data;
        },
        error=>{
          console.log(error);
        })
    });
  }


  validateSize(size:string){
    if(size=='default'){
    this.hasError=true;
      }
      else {this.hasError=false;}
   }


   validateQuantity(Quantity1:string){
      if(Quantity1=='default'){
        this.hasError1=true;
        }
        else {this.hasError1=false;}
     }


  updateItem(lineitem:any){
    //alert();
    //console.log(this.ItemModel)
    this.lservice.updateItem(this.ItemModel).subscribe(data=>{
      this.router.navigateByUrl('/cart');
    },
    error=>{
      console.log(error);
      this.resetForm(lineitem);
    })
  }

  resetForm(lineitem:NgForm){
    lineitem.reset();
  }

}
