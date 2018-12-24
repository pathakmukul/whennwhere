import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { AppRate } from '@ionic-native/app-rate';
import {OthersPage} from '../others/others';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { SocialSharing } from '@ionic-native/social-sharing';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController,private iab: InAppBrowser, public navParams: NavParams, private alertCtrl: AlertController, private appRate: AppRate, private socialSharing: SocialSharing, public toastCtrl: ToastController) {

  }
  HowToAlert(param) {
    this.navCtrl.push(OthersPage,{param});
    
    // // let alert = this.alertCtrl.create({
    // //   title: 'How to use When n Where',
    // //   subTitle: 'When n Where can be used to record and track the expiry (best before) dates of grocery items and even medicines. Select the When tab in app and fill in the deatils. The app will later show you details through the "View Items" button. Similarly',
    // //   buttons: ['Okay!']
    // // });
    // alert.present();
  }
  
  aboutUs(param1){
    this.navCtrl.push(OthersPage,{param1});
    
  
    // let alert = this.alertCtrl.create({
  //     title: 'About us!',
  //     subTitle: 'The developer has no name. Okay kidding, WordsApp has been developed by Mukul Pathak.',
  //       buttons: ['Okay!']
  //   });
  //   alert.present();
  
  }
  
  // getWords(){
  //   const browser = this.iab.create('http://mukulpathak.com/wordsapp','_self',{location:'no'}); 
    
  // }

  shareWnw(){
    this.socialSharing.share("Hey! download the When n' Where App and keep a track of your household items. To download the app visit http://mukulpathak.com/wnw").
    then(() => {
      this.message("Sharing success");
    // Success!
    }).catch(() => {
    // Error!
    this.message("Share failed");
    });
  }

  rateFive(){
  
  this.appRate.preferences.storeAppURL = {
    ios: '1288671603',
    android: 'https://play.google.com/store/apps/details?id=com.mukulpathak.wnw',
   // windows: 'ms-windows-store://review/?ProductId=<store_id>'
  };
  
  this.appRate.promptForRating(true);
  
  // or, override the whole preferences object
  this.appRate.preferences = {
    usesUntilPrompt: 3,
    storeAppURL: {
     ios: '1288671603',
     android: 'https://play.google.com/store/apps/details?id=com.mukulpathak.wnw',
   //  windows: 'ms-windows-store://review/?ProductId=<store_id>'
    }
  };
  
  this.appRate.promptForRating(false);
  
  }

  message(message){
    let toast = this.toastCtrl.create({
      message : message,
      duration : 2000,
      position : 'bottom'
    });
    toast.present();
  }
}
