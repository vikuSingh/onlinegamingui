import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';
import { RouterEvent, Router } from '@angular/router';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contact : Contact = new Contact();
  response : String;
  selectedValue: any;
  fullName: string;
  mobileNo: string;
  city:string;
  subject: string;
  reponseError: string;
  constructor(private contactService:ContactService,private router: Router
    ) { }

  ngOnInit() {
    this.city = null;

  }
  //event handler for the select element's change event
  selectChangeHandler (event: any) {
    //update the ui
    this.city = event.target.value;
  }
  public addContact() {
   /*  alert ("submited successfully"); */
    this.contact.fullName = this.fullName;
    this.contact.mobileNo = this.mobileNo;
    this.contact.city = this.city;
    this.contact.subject = this.subject;
    this.router.navigateByUrl('/contactview');

    console.log(this.contact);
    this.contactService.saveContact(this.contact).subscribe(
      data=> {
        this.response = data;
        if(this.response=="success") {
          this.router.navigateByUrl('/contactview');
        }else {
          this.reponseError = "Ünable to Save  Details..!"
        }
      },
      error => console.log(error));
      
  }

  contactdetails() {
  this.router.navigateByUrl('/contactview');
   
 }

}



