import { Order } from "./order";
import { Pizza } from "./pizza";

export class Pizzaorders {
    constructor(public pizzaorderId:any,
        public orderDate:any,
        public transactionMode:String,
        public quantity:any,
        public size:String,
        public totalCost:any,
        public pizza:Pizza,
        public order:Order){
  
        }
  }
  