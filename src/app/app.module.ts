import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { RegistrationComponent } from './registration/registration.component';
import { ViewpageComponent } from './viewpage/viewpage.component';
import { GalleryComponent } from './gallery/gallery.component';
import { CartComponent } from './cart/cart.component';
import { BillingComponent } from './billing/billing.component';
import { EmployeeRegistrationComponent } from './employee-registration/employee-registration.component';
import { EventComponent } from './event/event.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ViewprofileComponent } from './viewprofile/viewprofile.component';
import { FooterComponent } from './footer/footer.component';
import { ViewempComponent } from './viewemp/viewemp.component';
 

@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent,
    ForgotpasswordComponent,
    RegistrationComponent,
    ViewpageComponent,
    GalleryComponent,
    CartComponent,
    BillingComponent,
    EmployeeRegistrationComponent,
    EventComponent,
    AboutComponent,
    ContactComponent,
    NavbarComponent,
    SidebarComponent,
    ViewprofileComponent,
    FooterComponent,
    ViewempComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
