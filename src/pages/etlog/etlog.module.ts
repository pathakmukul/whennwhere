import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EtlogPage } from './etlog';

@NgModule({
  declarations: [
    EtlogPage,
  ],
  imports: [
    IonicPageModule.forChild(EtlogPage),
  ],
})
export class EtlogPageModule {}
