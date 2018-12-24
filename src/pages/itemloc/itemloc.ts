import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import { IladdPage } from '../iladd/iladd';
import { IllogPage } from '../illog/illog';
import {SQLite,SQLiteObject} from '@ionic-native/sqlite';
import {PinDialog} from '@ionic-native/pin-dialog';
import {PinSetPage} from '../pin-set/pin-set';
/**
 * Generated class for the ItemlocPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-itemloc',
  templateUrl: 'itemloc.html',
})
export class ItemlocPage {
  pin:any;
  pin_error = "Enter Pin";
  constructor(public navCtrl: NavController, public navParams: NavParams,private pinDialog : PinDialog,private sqlite : SQLite,public toastCtrl:ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ItemlocPage');
  }

  GotoIladd(){
    this.navCtrl.push(IladdPage);
    
  }

  GotoIllog(){
    this.sqlite.create({
      name : 'yash.db',
      location : 'default'
    }).then(
      (db :SQLiteObject) =>{
    
            db.executeSql("create table if not exists pin(code number(4))",{}).then((res) => {}).catch((err) => alert(err));
    
            db.executeSql("select * from pin",{}).then((selectRes)=>{
                // alert(JSON.stringify(selectRes));
                if(selectRes.rows.length == '0'){
                  this.navCtrl.push(PinSetPage);
                }
                else{
                  // this.navCtrl.push(EtlogPage);
                  this.pinPopUp();
                }
              }).catch((selectErr)=>{
              this.message('Error No Data is available for pin')
            });
      }
    ).catch((e) => {alert(e)});
    this.sqlite.create({
      name : 'yash.db',
      location : 'default'
    }).then(
      (db :SQLiteObject) =>{
          db.executeSql("select * from pin",{}).then(
            (selectRes) => {
              // alert(JSON.stringify(selectRes.rows.item(0)) + selectRes.rows.length);
            
              for(let i=0;i<selectRes.rows.length;i++){
                this.pin = selectRes.rows.item(i).code;
              }
              // alert(this.pin);
              
              }
            
          )
      }
    ).catch((e) => {alert(e)});
    
    // this.navCtrl.push(IllogPage);
    
  }
  pinPopUp(){
    
    this.pinDialog.prompt(this.pin_error, 'Enter Pin to Access Item Locator Content', ['OK', 'Cancel'])
    .then(
      (result: any) => {
        
        if (result.buttonIndex == 1){
                   
            // this.message("Pressed on OK"); 
          if(result.input1 == this.pin){
               this.navCtrl.push(IllogPage);
             }
            else{
              this.pin_error = "Invalid Pin";
              // this.message("Please enter valid pin");
              this.pinPopUp();
            }
      }
    }
    );

  }

  message(message){
    let toast = this.toastCtrl.create({
      message : message,
      duration : 3000,
      position : "bottom"
    });
    toast.present();
  }

}


