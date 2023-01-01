import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPizzaComponent } from './add-pizza/add-pizza.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { GetPizzaComponent } from './get-pizza/get-pizza.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
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
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';
import { CGetAllPizzasComponent } from './c-get-all-pizzas/c-get-all-pizzas.component';
import { AdminPasswordResetComponent } from './admin-password-reset/admin-password-reset.component';
import { UserPasswordResetComponent } from './user-password-reset/user-password-reset.component';
import { CustomerLogoutComponent } from './customer-logout/customer-logout.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { GetCustomerByidComponent } from './get-customer-byid/get-customer-byid.component';
import { DeleteAccountComponent } from './delete-account/delete-account.component';
import { GetPizzaordersComponent } from './get-pizzaorders/get-pizzaorders.component';
import { GetPizzaOrdersByIdComponent } from './get-pizza-orders-by-id/get-pizza-orders-by-id.component';
import { GetPizzaorderByDateComponent } from './get-pizzaorder-by-date/get-pizzaorder-by-date.component';
import { CGetPizzaordersComponent } from './c-get-pizzaorders/c-get-pizzaorders.component';

@NgModule({
  declarations: [
    AppComponent,
    AddPizzaComponent,
    MenuComponent,
    HomeComponent,
    AboutComponent,
    GetPizzaComponent,
    SignInComponent,
    SignUpComponent,
    PageNotFoundComponent,
    GetPizzaByidComponent,
    UpdatePizzaComponent,
    GetpizzaAscComponent,
    GetpizzaDescComponent,
    GetPizzaByTypeComponent,
    GetCustomersComponent,
    LineItemComponent,
    PlaceOrderComponent,
    CartComponent,
    UpdatecartitemComponent,
    MainMenuComponent,
    AdminLoginComponent,
    AdminHomeComponent,
    AdminMenuComponent,
    CGetAllPizzasComponent,
    AdminPasswordResetComponent,
    UserPasswordResetComponent,
    CustomerLogoutComponent,
    UpdateCustomerComponent,
    GetCustomerByidComponent,
    DeleteAccountComponent,
    GetPizzaordersComponent,
    GetPizzaOrdersByIdComponent,
    GetPizzaorderByDateComponent,
    CGetPizzaordersComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
