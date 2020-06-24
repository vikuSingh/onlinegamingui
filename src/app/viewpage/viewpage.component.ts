import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewpage',
  templateUrl: './viewpage.component.html',
  styleUrls: ['./viewpage.component.css']
})
export class ViewpageComponent implements OnInit {
  home: boolean = true;
  aboutus:boolean = false;
  gallery:boolean = false;
  packages:boolean = false;
  careers:boolean = false;
  events:boolean = false;
  contactus:boolean = false;

 constructor() { }

  ngOnInit(){
  }
  Home(){
    this.home=true;
    this.aboutus= false;
    this.gallery= false;
    this.packages= false;
    this.careers= false;
    this.events= false;
    this.contactus= false;
  }
  Aboutus(){
    this.home=false;
    this.aboutus= true;
    this.gallery= false;
    this.packages= false;
    this.careers= false;
    this.events= false;
    this.contactus= false;
  }
  Gallery(){
    this.home=false;
    this.aboutus= false;
    this.gallery= true;
    this.packages= false;
    this.careers= false;
    this.events= false;
    this.contactus= false;
  }
  Packages(){
    this.home=false;
    this.aboutus= false;
    this.gallery= false;
    this.packages= true;
    this.careers= false;
    this.events= false;
    this.contactus= false;
  }
  Careers(){
    this.home=false;
    this.aboutus= false;
    this.gallery= false;
    this.packages= false;
    this.careers= true;
    this.events= false;
    this.contactus= false;
  }
  Events(){
    this.home=false;
    this.aboutus= false;
    this.gallery= false;
    this.packages= false;
    this.careers= false;
    this.events= true;
    this.contactus= false;
  }
  Contactus(){
    this.home=false;
    this.aboutus= false;
    this.gallery= false;
    this.packages= false;
    this.careers= false;
    this.events= false;
    this.contactus= true;
  }

}
