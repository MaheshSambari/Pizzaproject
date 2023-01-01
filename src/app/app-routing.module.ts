import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddPizzaComponent } from './add-pizza/add-pizza.component';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { GetPizzaComponent } from './get-pizza/get-pizza.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { GetPizzaByidComponent } from './get-pizza-byid/get-pizza-byid.component';
import { UpdatePizzaComponent } from './update-pizza/update-pizza.component';
import { GetpizzaAscComponent } from './getpizza-asc/getpizza-asc.component';
import { GetpizzaDescComponent } from './getpizza-desc/getpizza-desc.component';
import { GetPizzaByTypeComponent } from './get-pizza-by-type/get-pizza-by-type.component';
import { GetCustomersComponent } from './get-customers/get-customers.component';
import { LineItemComponent } from './line-item/line-item.component';
import { PlaceOrderComponent } from './place-order/place-order.component';
import { CartComponent } from './cart/cart.component';
import { UpdatecartitemComponent } from './updatecartitem/updatecartitem.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';
import { CGetAllPizzasComponent } from './c-get-all-pizzas/c-get-all-pizzas.component';
import { AdminPasswordResetComponent } from './admin-password-reset/admin-password-reset.component';
import { UserPasswordResetComponent } from './user-password-reset/user-password-reset.component';
import { CustomerLogoutComponent } from './customer-logout/customer-logout.component';
import { DeleteAccountComponent } from './delete-account/delete-account.component';
import { GetCustomerByidComponent } from './get-customer-byid/get-customer-byid.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { GetPizzaordersComponent } from './get-pizzaorders/get-pizzaorders.component';
import { GetPizzaOrdersByIdComponent } from './get-pizza-orders-by-id/get-pizza-orders-by-id.component';
import { GetPizzaorderByDateComponent } from './get-pizzaorder-by-date/get-pizzaorder-by-date.component';
import { CGetPizzaordersComponent } from './c-get-pizzaorders/c-get-pizzaorders.component';

const routes: Routes = [
  {path:'',redirectTo:'/mainmenu',pathMatch:'full'},
  {path:'mainmenu',component:MainMenuComponent},
  {path:'adminpasswordreset',component:AdminPasswordResetComponent},
  {path:'userpasswordreset',component:UserPasswordResetComponent},
  {path:'clogout',component:CustomerLogoutComponent},
  {path:'adminhome',component:AdminHomeComponent},
  {path:'adminlogin',component:AdminLoginComponent},
  {path:'home',component:HomeComponent},
  {path:'updatecartitem/:id',component:UpdatecartitemComponent},
  {path:'cart',component:CartComponent},
  {path:'placeorder',component:PlaceOrderComponent},
  {path:'about',component:AboutComponent},
  {path:'addpizza',component:AddPizzaComponent},
  {path:'getcustomers',component:GetCustomersComponent},
  {path:'customerdelete',component:DeleteAccountComponent},
  {path:'getcustomerbyid',component:GetCustomerByidComponent},
  {path:'updatecustomer',component:UpdateCustomerComponent},
  {path:'getpizza',component:GetPizzaComponent},
  {path:'getpizzaorders',component:GetPizzaordersComponent},
  {path:'getpizzaordersbyid',component:GetPizzaOrdersByIdComponent},
  {path:'customergetpizza',component:CGetAllPizzasComponent},
  {path:'signin',component:SignInComponent},
  {path:'register',component:SignUpComponent},
  {path:'getpizzabyid',component:GetPizzaByidComponent},
  {path:'update/:id',component:UpdatePizzaComponent},
  {path:'getpizzaAsc',component:GetpizzaAscComponent},
  {path:'getpizzaDesc',component:GetpizzaDescComponent},
  {path:'getpizzabytype',component:GetPizzaByTypeComponent},
  {path:'addtocart/:id',component:LineItemComponent},
  {path:'getpizzaordersbydate',component:GetPizzaorderByDateComponent},
  {path:'getpizzaordersbycustomer',component:CGetPizzaordersComponent},
  {path:'**',component:PageNotFoundComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }