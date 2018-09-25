import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {RecordPage } from "../record/record";




@IonicPage()
@Component({
  selector: 'page-groovers',
  templateUrl: 'groovers.html',
})
export class GrooversPage {

  constructor(public navCtrl: NavController) { }
  

  record() {
    this.navCtrl.push(RecordPage);
  }

}
