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
import { ViewprofileComponent } from './viewprofile/viewprofile.component';
import { ViewempComponent } from './viewemp/viewemp.component';
import { PackagesComponent } from './packages/packages.component';
import { VieworderComponent } from './vieworder/vieworder.component';
import { UpdateorderComponent } from './updateorder/updateorder.component';
import { CancelorderComponent } from './cancelorder/cancelorder.component';



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
  {path:"package",component:PackagesComponent},
  {path:"contact",component:ContactComponent},
  {path:"about",component:AboutComponent},
  {path:"viewprofile",component:ViewprofileComponent},
  {path:"viewemp",component:ViewempComponent},
  {path:"vieworder", component:VieworderComponent},
  {path:"updateorder", component:UpdateorderComponent},
  {path: "cancelorder",component:CancelorderComponent }


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
