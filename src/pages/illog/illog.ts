import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { SocialSharing } from '@ionic-native/social-sharing';

/**
 * Generated class for the IllogPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-illog',
  templateUrl: 'illog.html',
})
export class IllogPage {
  items:any = [];
  
  constructor(public navCtrl: NavController, public navParams: NavParams,private sqlite: SQLite,public toastCtrl: ToastController, private socialSharing: SocialSharing) {
 
 
    this.sqlite.create({
      name:'data.db',
      location:'default'
    }).then((db : SQLiteObject) => {
       db.executeSql("select * from Item_Loc order by name collate nocase",{}).then((data)=>{
       this.items = [];
        if(data.rows.length > 0) {
        for(let i = 0; i < data.rows.length; i++) {
        // alert(data.rows.item(i).date_mfg);/
        // owner_name location date_kept 
        
    
        // this.items.push({name: data.rows.item(i).name,mfg : data.rows.item(i).date_mfg,purch : data.rows.item(i).date_purch,Exp : data.rows.item(i).date_exp,Count : this.diffDays});
        this.items.push({name: data.rows.item(i).name, owne : data.rows.item(i).owner_name, loc : data.rows.item(i).location, datk : data.rows.item(i).date_kept,image : data.rows.item(i).data_image});
      }
    
  
    
        this.message("Please upload image");
        }
        else{
          this.message("0 Results");
        }
    }).catch((err) => alert("Save atleat one entry to view records!"));
    });
    
    console.log("Inside Contructor");
 
 
 
  }
  message(message){
    let toast = this.toastCtrl.create({
      message : message,
      duration : 2000,
      position : 'bottom'
    });
    toast.present();
  }
  ionViewDidLoad() {
    // console.log('ionViewDidLoad IllogPage');
  }
  delete(item){
    this.sqlite.create({
    name:'data.db',
    location:'default'
  }).then((db : SQLiteObject) => {
     db.executeSql("delete from Item_Loc where name = ?",[item.name]).then((data)=>{
       let index = this.items.indexOf(item);
       if(index > - 1){
         this.items.splice(index,1);
       }
       this.message("Data removed successfully.");
     });
  });
  }
  shareil(item){
   
    this.socialSharing.share("\'"+item.name + "\' of \'" + item.owne + "\', location : \'" + item.loc + "\'. - Sent via When n' Where app.", "", item.image).
    then(() => {
      this.message("Sharing success");
    // Success!
    }).catch(() => {
    // Error!
    this.message("Share failed");
    });
  }

}
