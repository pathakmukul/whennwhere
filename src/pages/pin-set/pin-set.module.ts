import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PinSetPage } from './pin-set';

@NgModule({
  declarations: [
    PinSetPage,
  ],
  imports: [
    IonicPageModule.forChild(PinSetPage),
  ],
})
export class PinSetPageModule {}
