import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import {SQLite,SQLiteObject} from '@ionic-native/sqlite';

/**
 * Generated class for the PinSetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pin-set',
  templateUrl: 'pin-set.html',
})
export class PinSetPage {

  constructor(public navCtrl: NavController,private sqlite : SQLite, public navParams: NavParams,public toastCtrl:ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PinSetPage');
  }

  setpin(password){    
    let count = password.length;
    if(count > '4'){
        this.message("Please enter a 4 digit pass");
    }
    else{
      this.sqlite.create({
        name : 'yash.db',
        location : 'default'
      }).then(
        (db :SQLiteObject) =>{
          // alert(password);
          db.executeSql("insert into pin(code) values (?)",[password]).then(
          (insertRes) => {
            this.message("Pin Created");
            this.navCtrl.pop();
          }
          ).catch(err => alert(err));
        }
      ).catch((err) => alert(err));
    
    }
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
