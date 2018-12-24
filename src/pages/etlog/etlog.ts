import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { SocialSharing } from '@ionic-native/social-sharing';

/**
 * Generated class for the EtlogPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-etlog',
  templateUrl: 'etlog.html',
})
export class EtlogPage {
items:any = [];
expiry:any;
presentDate:any;
diffDays:any;
  constructor(public navCtrl: NavController, private socialSharing: SocialSharing, public navParams: NavParams,private sqlite: SQLite,public toastCtrl: ToastController) {
   
//  console.log("Inside constructor");
 this.sqlite.create({
  name:'data.db',
  location:'default'
}).then((db : SQLiteObject) => {
   db.executeSql("select * from Exp_Rem order by date_exp ASC",{}).then((data)=>{
   this.items = [];
    if(data.rows.length > 0) {
    for(let i = 0; i < data.rows.length; i++) {
    // alert(data.rows.item(i).date_mfg);/



    let a = data.rows.item(i).date_exp;
    let b = (a.split('-'));
    console.log(JSON.stringify(b));
    let year = parseInt(b[0]),
    Month = parseInt(b[1])-1,
    Day = parseInt(b[2])+1;
    // console.log(year + "" + Month + "" + Day );
    // console.log(new Date(year,Month,Day));

    let oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
    this.expiry = new Date(year,Month,Day);
    // console.log(this.expiry);
    this.presentDate = new Date();
    // console.log(this.presentDate);
    this.diffDays = Math.round((this.expiry.getTime() - this.presentDate.getTime())/(oneDay));
    // console.log(this.diffDays);
    // console.log(this.expiry.getTime());

    // console.log(this.presentDate.getTime());
    this.items.push({name: data.rows.item(i).name,mfg : data.rows.item(i).date_mfg,purch : data.rows.item(i).date_purch,Exp : data.rows.item(i).date_exp,Count : this.diffDays});
    
  
  
  }
    this.message("Data retrival successful");
    }
    else{
      this.message("0 Results");
    }
}).catch((err) => alert("Save atleat one entry to view records!"));
});

// console.log("Inside Contructor");

  }


  // view(){
  //   this.sqlite.create({
  //       name:'data.db',
  //       location:'default'
  //     }).then((db : SQLiteObject) => {
  //        db.executeSql("select * from Exp_Rem",{}).then((data)=>{
  //        this.items = [];
  //         if(data.rows.length > 0) {
  //         for(let i = 0; i < data.rows.length; i++) {
  //         // alert(data.rows.item(i).date_mfg);/
  //         this.items.push({name: data.rows.item(i).name,mfg : data.rows.item(i).date_mfg,purch : data.rows.item(i).date_purch,Exp : data.rows.item(i).date_exp});
  //         }
  //         this.message("Data retrival is successful");
  //         }
  //         else{
  //           this.message("0 Results");
  //         }
  //     }).catch((err) => alert("Save atleat one data to create database on your mobile"));
  //     })
     
  //   }
    
      // saveDetails(name){
      //   this.navCtrl.push(SavePage,{name});
      // }
      delete(item){
        this.sqlite.create({
        name:'data.db',
        location:'default'
      }).then((db : SQLiteObject) => {
         db.executeSql("delete from Exp_Rem where name = ?",[item.name]).then((data)=>{
           let index = this.items.indexOf(item);
           if(index > - 1){
             this.items.splice(index,1);
           }
           this.message("Data removed successfully.");
         });
      });
      }
     message(message){
        let toast = this.toastCtrl.create({
          message : message,
          duration : 2000,
          position : 'bottom'
        });
        toast.present();
      }

share(item){
  this.socialSharing.share("\'" +item.name +"\' is expiring on \'" + item.Exp + "\'. Purchased on : \'"+ item.purch + "\' and Manufactuting date : \'"+item.mfg + "\'. - via When n Where App").
  then(() => {
    this.message("Sharing success");
  // Success!
  }).catch(() => {
  // Error!
  this.message("Share failed");
  });
}

    ionViewDidLoad(){
      // this.view();
      // alert(document.getElementById('expiry').innerHTML);
      // let a = document.getElementById('expiry').innerHTML;
      // let a = "2017-08-01";
      // let b = (a.split('-'));
      // console.log(JSON.stringify(b));
      // let year = parseInt(b[0]),
      // Month = parseInt(b[1])-1,
      // Day = parseInt(b[2]);
      // // console.log(year + "" + Month + "" + Day );
      // // console.log(new Date(year,Month,Day));
  
      // let oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
      // this.expiry = new Date(year,Month,Day);
      // console.log(this.expiry);
      // this.presentDate = new Date();
      // console.log(this.presentDate);
      // this.diffDays = Math.floor(Math.abs((this.expiry.getTime() - this.presentDate.getTime())/(oneDay)));
      // console.log(this.diffDays);
      // console.log(this.expiry.getTime());
  
      // console.log(this.presentDate.getTime());
    //  let a = document.getElementById('count').innerHTML;
    //  alert(a);
    }
    


}
