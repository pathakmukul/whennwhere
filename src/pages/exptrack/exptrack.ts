import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import { EtaddPage } from '../etadd/etadd';
import { EtlogPage } from '../etlog/etlog';
import {PinSetPage} from '../pin-set/pin-set'
import {PinDialog} from '@ionic-native/pin-dialog';
import {SQLite,SQLiteObject} from '@ionic-native/sqlite';

/**
 * Generated class for the ExptrackPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-exptrack',
  templateUrl: 'exptrack.html',
})
export class ExptrackPage {
  // check:boolean = false;
  pin:any;
  pin_error = "Enter Pin";
  constructor(public navCtrl: NavController,private sqlite : SQLite, public toastCtrl : ToastController,public navParams: NavParams,private pinDialog : PinDialog) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExptrackPage');
  }

  MoveEtadd() {
    //push another page onto the history stack
    //causing the nav controller to animate the new page in
    this.navCtrl.push(EtaddPage);
  }

  MoveEtlog(){
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
    
  }
  pinPopUp(){
    
    this.pinDialog.prompt(this.pin_error, 'Enter Pin to Access Expiry Date Content', ['OK', 'Cancel'])
    .then(
      (result: any) => {
        
        if (result.buttonIndex == 1){
                   
            // this.message("Pressed on OK"); 
          if(result.input1 == this.pin){
               this.navCtrl.push(EtlogPage);
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
  // delete(){
  //   this.sqlite.create({
  //     name : 'yash.db',
  //     location : 'default'
  //   }).then((db:SQLiteObject) => {
  //     db.executeSql("drop table pin",{}).then((res) => {alert("Deleted Successfully")}).catch((err)=>alert(err));
  //   }).catch((err) => {
  //     alert(err);
  //   })
  // }
}
