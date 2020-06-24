import { Component, OnInit } from '@angular/core';
import { dependenciesFromGlobalMetadata } from '@angular/compiler/src/render3/r3_factory';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  forgot(){
    console.log("button click");
    document.getElementById("testing");

    }
  } 

