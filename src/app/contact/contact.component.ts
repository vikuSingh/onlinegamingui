import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contact : Contact = new Contact();
  response : any;
  firstName: string;
  lastName: string;
  mobileNo: string;
  country: string;
  subject: string;
  constructor(private contactService:ContactService) { }

  ngOnInit() {
  }

  public addContact() {
    this.contact.firstName = this.firstName;
    this.contact.lastName = this.lastName;
    this.contact.subject = this.subject;
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
