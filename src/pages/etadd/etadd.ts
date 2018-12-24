import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ToastController} from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import {ExptrackPage} from '../exptrack/exptrack';

/**
 * Generated class for the EtaddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-etadd',
  templateUrl: 'etadd.html',
})
export class EtaddPage {
  today = new Date().toJSON().split('T')[0];
  
  constructor(public navCtrl: NavController, public navParams: NavParams,private sqlite: SQLite,public toastCtrl: ToastController) {
  }



  dataDb(name,input_mfg,input_purch,input_exp){
    let b=input_mfg, c=input_purch, d=input_exp;

    // console.log(b,c,d);  
    if(name == null){
      this.message("Please enter a name");
    }
    //  else if(d < b){
    //   this.message("Expiry date greater than Manufacturing Date");
    // }
   
   else if(c == undefined){
      this.message("Please Enter the Purchase Date");
      }
    
      else if(d == undefined){
        this.message("Please Enter the Expiry Date");
      }
    else if(c > d){
      this.message("Expiry Date should be greater than Purchase Date");
    }
    else if(c < b){
      this.message("Purchase Date should be greater than Manufacturing Date");
    }
    else{
 
    this.sqlite.create({
      name: 'data.db',
      location: 'default'
    })
      .then((db: SQLiteObject) => {
    
    
        db.executeSql("create table if not exists Exp_Rem(name varchar(50) NOT NULL, date_purch varchar(30) NULL,  date_mfg varchar(30) NULL,date_exp varchar(30) NOT NULL)",{})
        .then((res)=>{
          // alert("Table created || Table Exist");
          // alert("Table Created");
        })
        .catch((err)=>{
          this.message("No table is created");
        });

        //Insert Query
        db.executeSql("insert into Exp_Rem(name, date_purch, date_mfg, date_exp) values(?,?,?,?)", [name, input_purch, input_mfg, input_exp])
        .then((res)=>
                  {
                    this.message("Data has been saved successfully");  
                    this.navCtrl.setRoot(ExptrackPage)
                    
                  }
            )
        .catch((err)=>alert("Please fill all details"));


}).catch((err) => alert("Error : " + err)); 
    }
}
message(message){
let toastCtrl = this.toastCtrl.create({
  message : message,
  duration : 2000,
  position : "bottom"
});
toastCtrl.present();
}
}