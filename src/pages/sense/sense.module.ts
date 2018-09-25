import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SensePage } from './sense';

@NgModule({
  declarations: [
    SensePage,
  ],
  imports: [
    IonicPageModule.forChild(SensePage),
  ],
})
export class SensePageModule {}
