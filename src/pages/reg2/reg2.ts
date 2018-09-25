import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {LoginPage } from "../login/login";


@Component({
  selector: 'page-reg2',
  templateUrl: 'reg2.html',
})
export class Reg2Page {

  constructor(public navCtrl: NavController) { }
  
  login(){
  
  this.navCtrl.push(LoginPage);
  }
  
  
}
