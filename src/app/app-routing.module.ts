import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { RegistrationComponent } from './registration/registration.component';
import { ViewpageComponent } from './viewpage/viewpage.component';
import { GalleryComponent } from './gallery/gallery.component';
import { CartComponent } from './cart/cart.component';
import { BillingComponent } from './billing/billing.component';
import { EmployeeRegistrationComponent } from './employee-registration/employee-registration.component';
import { ContactComponent } from './contact/contact.component';
import { EventComponent } from './event/event.component';
import { AboutComponent } from './about/about.component';



const routes: Routes = [
  {path:"", redirectTo:"/login",pathMatch: 'full'},
  {path:"login", component:LoginpageComponent},
  {path:"forgotpassword",component:ForgotpasswordComponent},
  {path:"registration",component:RegistrationComponent},
  {path:"view",component:ViewpageComponent},
  {path:"gallery",component:GalleryComponent},
  {path:"cart",component:CartComponent},
  {path:"billing",component:BillingComponent},
  {path:"employee",component:EmployeeRegistrationComponent},
  {path:"event",component:EventComponent},
  {path:"contact",component:ContactComponent},
  {path:"about",component:AboutComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
