import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {DeckPage } from "../deck/deck";





@IonicPage()
@Component({
  selector: 'page-record',
  templateUrl: 'record.html',
})
export class RecordPage {

 constructor(public navCtrl: NavController) { }
  

  deck() {
    this.navCtrl.push(DeckPage);
  }

}
