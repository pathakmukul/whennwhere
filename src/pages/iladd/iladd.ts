import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, ToastController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import {ItemlocPage} from '../itemloc/itemloc';
/**
 * Generated class for the IladdPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-iladd',
  templateUrl: 'iladd.html',
})
export class IladdPage {
  base64Image: any;
  today = new Date().toJSON().split('T')[0];
  constructor(public navCtrl: NavController, public navParams: NavParams, private camera: Camera, public actionSheetCtrl: ActionSheetController, private sqlite: SQLite, public toastCtrl: ToastController) {
  }

  // pic(){
  //   alert("Inside takePic");
  //   const options: CameraOptions = {
  //     quality: 100,
  //     destinationType: this.camera.DestinationType.DATA_URL,
  //     encodingType: this.camera.EncodingType.JPEG,
  //     mediaType: this.camera.MediaType.PICTURE,
  //     sourceType: 1
  //   }
  //   console.log("done");
  //   this.camera.getPicture(options).then((imageData) => {
  //    // imageData is either a base64 encoded string or a file URI
  //    // If it's base64:
  //    let base64Image = 'data:image/jpeg;base64,' + imageData;
  //   }, (err) => {
  //    // Handle error
  //   });

  // }
  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Select Image Source',
      buttons: [
        {
          text: 'Load from Library',
          handler: () => {
            this.select(this.camera.PictureSourceType.PHOTOLIBRARY);
          }
        },
        {
          text: 'Use Camera',
          handler: () => {
            this.select(this.camera.PictureSourceType.CAMERA);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });
    actionSheet.present();
  }
  select(sourceType: number) {

    const options: CameraOptions = {
      quality: 50,
      sourceType,
      // allowEdit: true,
      correctOrientation: true,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    // this.mode = mode;

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      // this.srcImage = `data:image/jpeg;base64,${imageData}`;
 
      this.base64Image = `data:image/jpeg;base64,${imageData}`;

     
    }, (err) => {
      // Handle error
      alert(err);
    });
  }


  dataDb(input_name, input_owner, input_loc, input_date){
    if((input_name == undefined) || (input_owner == undefined) || (input_loc == undefined) || (input_date == undefined)){
      this.message("Please fill all details");
    }

else{
    this.sqlite.create({
      name: 'data.db',
      location: 'default'
    })
      .then((db: SQLiteObject) => {

        db.executeSql("create table if not exists Item_Loc(name varchar(100) NULL, owner_name varchar(100) NULL, location varchar(100) NULL, date_kept varchar(30) NULL, data_image BLOB NOT NULL )", {})
          .then((res) => {
            // alert("Table created || Table Exist");
            // alert("Table Created");
          })
          .catch((err) => {
            this.message("No table is created");
          });

        //Insert Query
        db.executeSql("insert into Item_Loc(name, owner_name, location, date_kept,data_image) values(?,?,?,?,?)", [input_name, input_owner, input_loc, input_date,this.base64Image])
          .then((res) => {
            this.message("Data saved successfully");
            this.navCtrl.setRoot(ItemlocPage);
          }
          )
          .catch((err) => alert("Data Insertion Failed"));


      }).catch((err) => alert("Error : " + err)); 
  }
}
message(message){
      let toastCtrl = this.toastCtrl.create({
        message: message,
        duration: 2000,
        position: "bottom"
      });
      toastCtrl.present();
    }
}