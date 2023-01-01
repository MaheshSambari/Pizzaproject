import { UserLogin } from "./user-login";

export class Customer {
    constructor(public customerId:Number,
                public customerName:string,
                public customerMobile:any,
                public customerEmailId:string,
                public customerAddress:string,
                public userModel:UserLogin)
                {

                 }
}