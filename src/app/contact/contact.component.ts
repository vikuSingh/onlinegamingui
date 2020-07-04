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
  response : any;
  selectedValue: any;
  firstName: string;
  lastName: string;
  mobileNo: string;
  country: string;
  subject: string;
  constructor(private contactService:ContactService,private router: Router
    ) { }

  ngOnInit() {

  }
  //event handler for the select element's change event
  selectChangeHandler (event: any) {
    //update the ui
    this.country = event.target.value;
  }
  public addContact() {
    alert ("submited successfully");
    this.contact.firstName = this.firstName;
    this.contact.lastName = this.lastName;
    this.contact.mobileNo = this.mobileNo;
    this.contact.country = this.country;
    this.contact.subject = this.subject;
    this.router.navigateByUrl('/view');

    console.log(this.contact);
    this.contactService.saveContact(this.contact).subscribe(
      data=> {
        this.response = data; 
        console.log(data) 
      },
      error => console.log(error));
  }

 getContact() {
   
 }

}
