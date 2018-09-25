import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { NavController } from 'ionic-angular';

import {Reg2Page } from "../reg2/reg2";



@Component({
  selector: 'page-reg1',
  templateUrl: 'reg1.html',
})


export class Reg1Page {

constructor(public alertCtrl: AlertController, public navCtrl: NavController) { }



  showCheckbox() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Which of the following music genre you like?');

    alert.addInput({
      type: 'checkbox',
      label: 'Blues',
      value: 'value1',
      checked: true
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Classical',
      value: 'value2'
    });
    
    alert.addInput({
      type: 'checkbox',
      label: 'Country',
      value: 'value3'
    });
    
    alert.addInput({
      type: 'checkbox',
      label: 'Electronic',
      value: 'value4'
    });
    
    alert.addInput({
      type: 'checkbox',
      label: 'Folk',
      value: 'value5'
    });
    alert.addInput({
      type: 'checkbox',
      label: 'Jazz',
      value: 'value6'
    });
    
     alert.addInput({
      type: 'checkbox',
      label: 'New age',
      value: 'value7'
    });
    
    alert.addInput({
      type: 'checkbox',
      label: 'Reggae',
      value: 'value8'
    });
    
    alert.addInput({
      type: 'checkbox',
      label: 'Rock',
      value: 'value9'
    });
    
    

    alert.addButton('Cancel');
    alert.addButton({
      text: 'Okay',
      handler: data => {
        
        //this.testCheckboxOpen = false;
       // this.testCheckboxResult = data;
      }
    });
    alert.present();
  }
  
  
  
  nextReg(){
  
  this.navCtrl.push(Reg2Page);
  }
  
  
}
  
  

  

