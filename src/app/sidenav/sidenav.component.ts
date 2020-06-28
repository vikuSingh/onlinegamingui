import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  html: boolean = true;
  introductiontohtml: boolean = false;
  htmleditor: boolean = false;
  htmlbasic: boolean = false;
  htmlelement: boolean = false;
  cancel: boolean = false;
  history: boolean = false;
  viewhistory:boolean = false;
  deletehistory:boolean= false;
  my:boolean=false;
  constructor() { }

  ngOnInit() {

  }
  mypoto() {
    this.html = false;
    this.introductiontohtml = false;
    this.htmleditor = false;
    this.htmlbasic = false;
    this.htmlelement = false;
    this.cancel= false;
    this.history=false;
    this.viewhistory=false;
    this.deletehistory=false;
    this.my=true;
  }

  profile() {
    this.html = true;
    this.introductiontohtml = false;
    this.htmleditor = false;
    this.htmlbasic = false;
    this.htmlelement = false;
    this.cancel= false;
    this.history=false;
    this.viewhistory=false;
    this.deletehistory=false;
    this.my=false;
  }
  location() {
    this.html = false;
    this.introductiontohtml = true;
    this.htmleditor = false;
    this.htmlbasic = false;
    this.htmlelement = false;
    this.cancel= false;
    this.history=false;
    this.viewhistory=false;
    this.deletehistory=false;
    this.my=false;
  }

  order() {
    this.html = false;
    this.introductiontohtml = false;
    this.htmleditor = true;
    this.htmlbasic = false;
    this.htmlelement = false;
    this.cancel= false;
    this.history=false;
    this.viewhistory=false;
    this.deletehistory=false;
    this.my=false;
  }
  vieworder() {
    this.html = false;
    this.introductiontohtml = false;
    this.htmleditor = false;
    this.htmlbasic = true;
    this.htmlelement = false;
    this.cancel= false;
    this.history=false;
    this.viewhistory=false;
    this.deletehistory=false;
    this.my=false;
  }
  updateorder() {
    this.html = false;
    this.introductiontohtml = false;
    this.htmleditor = false;
    this.htmlbasic = false;
    this.htmlelement = true;
    this.cancel= false;
    this.history=false;
    this.viewhistory=false;
    this.deletehistory=false;
    this.my=false;
  }
  cancelorder() {
    this.html = false;
    this.introductiontohtml = false;
    this.htmleditor = false;
    this.htmlbasic = false;
    this.htmlelement = false;
    this.cancel= true;
    this.history=false;
    this.viewhistory=false;
    this.deletehistory=false;
    this.my=false;
  }
  hist(){
    this.html = false;
    this.introductiontohtml = false;
    this.htmleditor = false;
    this.htmlbasic = false;
    this.htmlelement = false;
    this.cancel= false;
    this.history=true;
    this.viewhistory=false;
    this.deletehistory=false
    this.my=false;
  }
  viewhi(){
    this.html = false;
    this.introductiontohtml = false;
    this.htmleditor = false;
    this.htmlbasic = false;
    this.htmlelement = false;
    this.cancel= false;
    this.history=false;
    this.viewhistory=true;
    this.deletehistory=false;
    this.my=false;
  }
  deletehi(){
    this.html = false;
    this.introductiontohtml = false;
    this.htmleditor = false;
    this.htmlbasic = false;
    this.htmlelement = false;
    this.cancel= false;
    this.history=false;
    this.viewhistory=false;
    this.deletehistory=true;
    this.my=false;
  }
}
