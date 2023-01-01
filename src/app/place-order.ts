import { LineItem } from "./line-item";

export class PlaceOrder<LineItem> {
    constructor(public orderLocation:string,
                public orderDescription:string,
                public orderCustomerId:any, 
                public transactionMode:string)
                {

                  }
}
