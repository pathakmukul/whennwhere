import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ItemlocPage } from './itemloc';

@NgModule({
  declarations: [
    ItemlocPage,
  ],
  imports: [
    IonicPageModule.forChild(ItemlocPage),
  ],
})
export class ItemlocPageModule {}
