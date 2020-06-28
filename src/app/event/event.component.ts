import { Component, OnInit } from '@angular/core';
import { Event } from '../event';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

     event:Event=new Event();
     response:any;
     eventName:string
     entryAmount:number
     gameType:string
     gameName:string
     teams:number
     winningPrice:number

  constructor() { }

  ngOnInit() {
  }

}
