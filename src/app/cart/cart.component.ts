import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LineItem } from '../line-item';
import { LineItemService } from '../line-item.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  
  ItemModel = new LineItem('','','','','','');
  public msg:any;
  public cart1:any = [];
  public customerId!: number;
  public cust:any;


  constructor(private lservice:LineItemService,private router:Router) { }
  ngOnInit(): void {
    this.cust=localStorage.getItem("customerId");
    // console.log(typeof(Number(this.cust)));
    this.lservice.getCart(Number(this.cust)).subscribe(
      data=>{
          console.log(data);
          this.cart1=data;
          this.ItemModel = new LineItem('','','','','','');
          this.msg='';         
          if(this.cart1.message.length!=0){
              this.ItemModel = new LineItem('','','','','','');
              this.msg=data;
              this.cart1=[];
            }
        },
   error=>{
      console.log(error);
   })
   }

  // getCartById(id:any){
  //    this.customerId=id.customerId
  //    this.getCart();
  //  }

//   getCart(){
//         this.lservice.getCart(this.customerId).subscribe(
//         data=>{
//             console.log(data);
//             this.cart1=data;
//             this.ItemModel = new LineItem('','','','','','');
//             this.msg='';         
//             if(this.cart1.message.length!=0){
//                 this.ItemModel = new LineItem('','','','','','');
//                 this.msg=data;
//                 this.cart1=[];
//               }
//           },
//      error=>{sss
//         console.log(error);
//      })
// }
   
  updateCart(id:number){
     this.router.navigate(['/updatecartitem',id]);
  }

  deleteCart(id:number){
    this.lservice.deleteItemById(id).subscribe(
      data=>{
        console.log(data);
        this.ngOnInit();
       })
  }


  placeOrder(){
    this.router.navigate(['/placeorder']);
  }

  addMore(){
    this.router.navigate(['/customergetpizza']);
  }

}
