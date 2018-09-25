import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GrooversPage } from './groovers';

@NgModule({
  declarations: [
    GrooversPage,
  ],
  imports: [
    IonicPageModule.forChild(GrooversPage),
  ],
})
export class GrooversPageModule {}
