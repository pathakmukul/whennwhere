import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import {ItemlocPage} from '../pages/itemloc/itemloc';
import { ExptrackPage } from '../pages/exptrack/exptrack';
import {OthersPage} from '../pages/others/others';
import {PinSetPage} from '../pages/pin-set/pin-set';

import {EtlogPage} from '../pages/etlog/etlog';
import { EtaddPage } from '../pages/etadd/etadd';
import { IllogPage } from '../pages/illog/illog';
import { IladdPage } from '../pages/iladd/iladd';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';



import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Camera, CameraOptions } from '@ionic-native/camera';
import {LocalNotifications} from '@ionic-native/local-notifications';
import { AppRate } from '@ionic-native/app-rate';
import {InAppBrowser} from '@ionic-native/in-app-browser';
import { SocialSharing } from '@ionic-native/social-sharing';
import {PinDialog} from '@ionic-native/pin-dialog';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage,
    ItemlocPage,
    ExptrackPage,
    EtaddPage,
    EtlogPage,
    IladdPage,
    IllogPage,
    OthersPage,
    PinSetPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage,
    ItemlocPage,
    ExptrackPage,
    EtaddPage,
    EtlogPage,
    IladdPage,
    IllogPage,
    OthersPage,
    PinSetPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SQLite,
    Camera,
    AppRate,
    LocalNotifications,   
    InAppBrowser,
    SocialSharing,
    PinDialog,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
