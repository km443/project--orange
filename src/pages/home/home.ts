import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {SensePage } from "../sense/sense";
import {SetPage } from "../set/set";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {}

  sense(){
  
  this.navCtrl.push(SensePage);
  }
  
  participate(){
  
  this.navCtrl.push(SetPage);
  }
  }


