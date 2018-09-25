import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {GrooversPage } from "../groovers/groovers";


@Component({
  selector: 'page-sense',
  templateUrl: 'sense.html',
})
export class SensePage {

 constructor(public navCtrl: NavController) { }
  
  groovers(){
  
  this.navCtrl.push(GrooversPage);
 }
  

  

}
