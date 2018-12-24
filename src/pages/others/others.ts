import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the OthersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-others',
  templateUrl: 'others.html',
})
export class OthersPage {
howto:any;
about:any;
title:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.howto = this.navParams.get('param');
    this.about = this.navParams.get('param1');
    // this.title = this.howto || this.about;
    if(this.howto == null){
      this.title = "About Developers!";
    }
    else if(this.about == null){
      this.title = "How To Use ";
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OthersPage');
  }
  HowToAlert(){
this.title="How To use";
  }

  aboutUs(){

  }
}
