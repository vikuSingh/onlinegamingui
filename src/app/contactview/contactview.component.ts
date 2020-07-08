import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contactview',
  templateUrl: './contactview.component.html',
  styleUrls: ['./contactview.component.css']
})
export class ContactviewComponent implements OnInit {
  response: any;
  responseerror: any;
  responseList: any;

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.getContactviewDetails();
  }
  public getContactviewDetails() {
    this.contactService.getContact().subscribe(
      data => {
        this.response = data;
        this.responseList = this.response;
      },
      error => console.log(error));
  }

}
