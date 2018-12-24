webpackJsonp([8],{

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OthersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the OthersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OthersPage = (function () {
    function OthersPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.howto = this.navParams.get('param');
        this.about = this.navParams.get('param1');
        // this.title = this.howto || this.about;
        if (this.howto == null) {
            this.title = "About Developers!";
        }
        else if (this.about == null) {
            this.title = "How To Use ";
        }
    }
    OthersPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OthersPage');
    };
    OthersPage.prototype.HowToAlert = function () {
        this.title = "How To use";
    };
    OthersPage.prototype.aboutUs = function () {
    };
    return OthersPage;
}());
OthersPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-others',template:/*ion-inline-start:"/Users/pathakmk/Documents/ionicworkshop/trakc/src/pages/others/others.html"*/'<ion-header>\n    \n      <ion-navbar color="yell">\n        <ion-title>{{title}}</ion-title>\n      </ion-navbar>\n    \n    </ion-header>\n    \n    \n    <ion-content padding>\n        <div *ngIf="howto">\n    \n          <p>When n Where app has two main features,</p>\n          <h5 style="font-weight: bold;color: #1abc9c"> The WHEN </h5>\n          <p style="font-weight: bold"> Used to track the expiry date of an item</p>\n         <p> <span style="font-weight: bold;color: #1abc9c"> Can be Used for : </span> Unpacked Grocery items, medicines, eatables, beverages etc. </p>\n        <p>  The first tab of is the The When part. To add an item press the <span style="color: #1abc9c"> "Add Item" </span> button and fill in the details.</p>\n        <p>  To view and track the expiry dates from the When tab click on <span style="color: #1abc9c"> "View Items" </span>. Voila! Here you can see all the details about your grocery items and medicines. </p>\n          \n        <h5 style="font-weight: bold;color: #1abc9c"> The WHERE </h5>\n        <p style="font-weight: bold"> Used to track the location kept at of an item</p>\n       <p> <span style="font-weight: bold;color: #1abc9c"> Can be Used for : </span> Important files, documents, passports, ID cards, personal bellongings, tools, house hold items etc.</p>\n      <p>  The second tab of is the The Where part. To add an item press the <span style="color: #1abc9c"> "Add Item" </span> button and fill in the details.</p>\n      <p>  To view the list later in future click on <span style="color: #1abc9c"> "View Items" </span> button on the same page. And now you can see the records of items in your list and can easily locate what is important to you! </p>\n        \n      <h5 style="font-weight: bold;color: #1abc9c">   CHEERS!  </h5>\n    <p style="color : #95a5a6">*In case user forgets pin, consider reinstalling the app.</p>\n        </div>\n    \n    <div *ngIf="about">\n        <h1 style="font-weight: bold"> Our Story</h1>\n        \n    <p style="text-align: justify; font-family :sans-serif; " > When n\' Where app came into existance after we thought it\'s high time that people stop forgetting things. People often tend to forget when the grocery item kept in their kitchen is going to be stale or where they have kept their tool kit. The idea behind this app is pretty simple, just save a track about such items here and you are ready to not forget things, EVER!\n    </p>\n    <h1 style="font-weight: bold"> Developers</h1>\n    <p style="font-weight: bold;color: #1abc9c"> Yashwanth Korla <br> Balaji Nagaraj <br> Mukul Pathak. </p>\n    \n    <h1 style="font-weight: bold"> Contact</h1>\n    <h4 style="font-weight: bold;color: #1abc9c">Product Website </h4>\n    <a href="http://www.mukulpathak.com/wnw" style="font-weight: bold;color: #000000">MukulPathak.com</a>\n    <h4 style="font-weight: bold;color: #1abc9c">Developer Website </h4>\n    \n    <a href="http://www.techyknights.com" style="font-weight: bold;color: #000000">Yashwanth Korla\'s blog </a>\n    <h4 style="font-weight: bold;color: #1abc9c">Developer E-Mail </h4>\n    \n    <a href="mailto:mu@mukulpathak.com?Subject=Hello!" target="_top"  style="font-weight: bold;color: #000000">mu@mukulpathak.com</a>\n    \n    <h1 style="font-weight: bold"> Powered By</h1>\n    <ion-row>\n      <ion-col col-2></ion-col>\n      <ion-col col-8>\n    <img style="width: 100%; "\n    src="assets/muk.png">\n      </ion-col>\n      <ion-col col-2></ion-col>\n    </ion-row>\n    </div>\n    </ion-content>'/*ion-inline-end:"/Users/pathakmk/Documents/ionicworkshop/trakc/src/pages/others/others.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], OthersPage);

//# sourceMappingURL=others.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IladdPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_sqlite__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__itemloc_itemloc__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the IladdPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var IladdPage = (function () {
    function IladdPage(navCtrl, navParams, camera, actionSheetCtrl, sqlite, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.camera = camera;
        this.actionSheetCtrl = actionSheetCtrl;
        this.sqlite = sqlite;
        this.toastCtrl = toastCtrl;
        this.today = new Date().toJSON().split('T')[0];
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
    IladdPage.prototype.presentActionSheet = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Select Image Source',
            buttons: [
                {
                    text: 'Load from Library',
                    handler: function () {
                        _this.select(_this.camera.PictureSourceType.PHOTOLIBRARY);
                    }
                },
                {
                    text: 'Use Camera',
                    handler: function () {
                        _this.select(_this.camera.PictureSourceType.CAMERA);
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel'
                }
            ]
        });
        actionSheet.present();
    };
    IladdPage.prototype.select = function (sourceType) {
        var _this = this;
        var options = {
            quality: 50,
            sourceType: sourceType,
            // allowEdit: true,
            correctOrientation: true,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        // this.mode = mode;
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            // this.srcImage = `data:image/jpeg;base64,${imageData}`;
            _this.base64Image = "data:image/jpeg;base64," + imageData;
        }, function (err) {
            // Handle error
            alert(err);
        });
    };
    IladdPage.prototype.dataDb = function (input_name, input_owner, input_loc, input_date) {
        var _this = this;
        if ((input_name == undefined) || (input_owner == undefined) || (input_loc == undefined) || (input_date == undefined)) {
            this.message("Please fill all details");
        }
        else {
            this.sqlite.create({
                name: 'data.db',
                location: 'default'
            })
                .then(function (db) {
                db.executeSql("create table if not exists Item_Loc(name varchar(100) NULL, owner_name varchar(100) NULL, location varchar(100) NULL, date_kept varchar(30) NULL, data_image BLOB NOT NULL )", {})
                    .then(function (res) {
                    // alert("Table created || Table Exist");
                    // alert("Table Created");
                })
                    .catch(function (err) {
                    _this.message("No table is created");
                });
                //Insert Query
                db.executeSql("insert into Item_Loc(name, owner_name, location, date_kept,data_image) values(?,?,?,?,?)", [input_name, input_owner, input_loc, input_date, _this.base64Image])
                    .then(function (res) {
                    _this.message("Data saved successfully");
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__itemloc_itemloc__["a" /* ItemlocPage */]);
                })
                    .catch(function (err) { return alert("Data Insertion Failed"); });
            }).catch(function (err) { return alert("Error : " + err); });
        }
    };
    IladdPage.prototype.message = function (message) {
        var toastCtrl = this.toastCtrl.create({
            message: message,
            duration: 2000,
            position: "bottom"
        });
        toastCtrl.present();
    };
    return IladdPage;
}());
IladdPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-iladd',template:/*ion-inline-start:"/Users/pathakmk/Documents/ionicworkshop/trakc/src/pages/iladd/iladd.html"*/'<!--\n  Generated template for the IladdPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar  color="yell">\n    <ion-title>Add Item</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<!-- input_name, input_owner, input_loc, input_date -->\n\n<ion-content padding>\n    <h5 text-center>Add item and its location here. And we will remember it for you!</h5>\n    \n      <ion-list style="margin-top:50px;">\n        <ion-item>\n            <ion-label inset >Item Name</ion-label>\n            <ion-input [(ngModel)]="input_name" type="text"></ion-input> \n        </ion-item>\n    \n        <ion-item>\n            <ion-label inset >Item Owner</ion-label>\n            <ion-input [(ngModel)]="input_owner" type="text"></ion-input> \n        </ion-item>\n        \n        <ion-item>\n            <ion-label inset >Location of Item</ion-label>\n            <ion-input type="text" [(ngModel)]="input_loc"></ion-input> \n        </ion-item>\n        \n        <ion-item>\n          <ion-label inset>Item Kept on</ion-label>\n              <ion-datetime [max]="today" type="date" [(ngModel)]="input_date"></ion-datetime>\n        </ion-item>\n        \n      </ion-list>\n      <br>\n      <ion-buttons>\n      <button ion-button  outline block (click)="presentActionSheet()" color="yell">Take Image</button>\n      <div *ngIf="base64Image" id="confirm_message">\n        Image Uploaded Successfully\n      </div>\n    <button ion-button block color="yell" (click)="dataDb(input_name, input_owner, input_loc, input_date)">Save</button>\n      </ion-buttons>\n</ion-content>\n'/*ion-inline-end:"/Users/pathakmk/Documents/ionicworkshop/trakc/src/pages/iladd/iladd.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_sqlite__["a" /* SQLite */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
], IladdPage);

//# sourceMappingURL=iladd.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IllogPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_sqlite__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the IllogPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var IllogPage = (function () {
    function IllogPage(navCtrl, navParams, sqlite, toastCtrl, socialSharing) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sqlite = sqlite;
        this.toastCtrl = toastCtrl;
        this.socialSharing = socialSharing;
        this.items = [];
        this.sqlite.create({
            name: 'data.db',
            location: 'default'
        }).then(function (db) {
            db.executeSql("select * from Item_Loc order by name collate nocase", {}).then(function (data) {
                _this.items = [];
                if (data.rows.length > 0) {
                    for (var i = 0; i < data.rows.length; i++) {
                        // alert(data.rows.item(i).date_mfg);/
                        // owner_name location date_kept 
                        // this.items.push({name: data.rows.item(i).name,mfg : data.rows.item(i).date_mfg,purch : data.rows.item(i).date_purch,Exp : data.rows.item(i).date_exp,Count : this.diffDays});
                        _this.items.push({ name: data.rows.item(i).name, owne: data.rows.item(i).owner_name, loc: data.rows.item(i).location, datk: data.rows.item(i).date_kept, image: data.rows.item(i).data_image });
                    }
                    _this.message("Please upload image");
                }
                else {
                    _this.message("0 Results");
                }
            }).catch(function (err) { return alert("Save atleat one entry to view records!"); });
        });
        console.log("Inside Contructor");
    }
    IllogPage.prototype.message = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 2000,
            position: 'bottom'
        });
        toast.present();
    };
    IllogPage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad IllogPage');
    };
    IllogPage.prototype.delete = function (item) {
        var _this = this;
        this.sqlite.create({
            name: 'data.db',
            location: 'default'
        }).then(function (db) {
            db.executeSql("delete from Item_Loc where name = ?", [item.name]).then(function (data) {
                var index = _this.items.indexOf(item);
                if (index > -1) {
                    _this.items.splice(index, 1);
                }
                _this.message("Data removed successfully.");
            });
        });
    };
    IllogPage.prototype.shareil = function (item) {
        var _this = this;
        this.socialSharing.share("\'" + item.name + "\' of \'" + item.owne + "\', location : \'" + item.loc + "\'. - Sent via When n' Where app.", "", item.image).
            then(function () {
            _this.message("Sharing success");
            // Success!
        }).catch(function () {
            // Error!
            _this.message("Share failed");
        });
    };
    return IllogPage;
}());
IllogPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-illog',template:/*ion-inline-start:"/Users/pathakmk/Documents/ionicworkshop/trakc/src/pages/illog/illog.html"*/'<!--\n  Generated template for the IllogPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar  color="yell">\n    <ion-title>The Where List</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <p text-center style="font-weight: bolder">* Please swipe left on an item for more options.</p>\n    <ion-list>\n        <ion-item-sliding *ngFor="let item of items" id="item">\n            \n            <ion-item >\n              <!-- <ion-avatar item-start>\n                <img src="assets/img/avatar-ts-woody.png"> vname, owner_name, location, date_kept\n              </ion-avatar> -->\n              <ion-row>\n                <ion-col>\n                    <h1 text-wrap class="sub_heading" style="font-weight: bold;font-weight: bold;">{{item.name}}</h1> \n                    <p text-wrap class="sub_heading"><span style="font-weight: bold;color: #1abc9c">Item Owner : </span> {{item.owne}}</p>\n                    <p text-wrap class="sub_heading"><span style="font-weight: bold;color: #1abc9c">Location :</span> {{item.loc}}</p>\n                    <p  text-wrap class="sub_heading"><span style="font-weight: bold;color: #1abc9c">Expiry Date : </span><span id="expiry">{{item.datk}}</span></p>\n                </ion-col>\n                <!-- <ion-col text-center>\n                  <h2>Days to Expire</h2>\n                  <br>\n                  <span id="count">{{item.Count}}</span>\n                </ion-col> -->\n              </ion-row>\n              <img  src="{{item.image}}" alt="{{item.name}}"/>\n               <!-- <ion-icon name="remove-circle" item-right (click)="delete(item)"></ion-icon> -->\n            </ion-item>\n       \n            <ion-item-options>\n                <button ion-button color="primary" icon-start (click)="shareil(item)">\n                    <ion-icon name="share"></ion-icon>\n                    Share\n                  </button>\n              <button ion-button color="danger" icon-start (click)="delete(item)">\n                  <ion-icon name="remove-circle"></ion-icon>\n                  Delete\n                </button>\n      \n\n              </ion-item-options>\n            \n           \n          </ion-item-sliding>               \n          </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/pathakmk/Documents/ionicworkshop/trakc/src/pages/illog/illog.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_sqlite__["a" /* SQLite */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__["a" /* SocialSharing */]])
], IllogPage);

//# sourceMappingURL=illog.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EtaddPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_sqlite__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__exptrack_exptrack__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the EtaddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EtaddPage = (function () {
    function EtaddPage(navCtrl, navParams, sqlite, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sqlite = sqlite;
        this.toastCtrl = toastCtrl;
        this.today = new Date().toJSON().split('T')[0];
    }
    EtaddPage.prototype.dataDb = function (name, input_mfg, input_purch, input_exp) {
        var _this = this;
        var b = input_mfg, c = input_purch, d = input_exp;
        // console.log(b,c,d);  
        if (name == null) {
            this.message("Please enter a name");
        }
        else if (c == undefined) {
            this.message("Please Enter the Purchase Date");
        }
        else if (d == undefined) {
            this.message("Please Enter the Expiry Date");
        }
        else if (c > d) {
            this.message("Expiry Date should be greater than Purchase Date");
        }
        else if (c < b) {
            this.message("Purchase Date should be greater than Manufacturing Date");
        }
        else {
            this.sqlite.create({
                name: 'data.db',
                location: 'default'
            })
                .then(function (db) {
                db.executeSql("create table if not exists Exp_Rem(name varchar(50) NOT NULL, date_purch varchar(30) NULL,  date_mfg varchar(30) NULL,date_exp varchar(30) NOT NULL)", {})
                    .then(function (res) {
                    // alert("Table created || Table Exist");
                    // alert("Table Created");
                })
                    .catch(function (err) {
                    _this.message("No table is created");
                });
                //Insert Query
                db.executeSql("insert into Exp_Rem(name, date_purch, date_mfg, date_exp) values(?,?,?,?)", [name, input_purch, input_mfg, input_exp])
                    .then(function (res) {
                    _this.message("Data has been saved successfully");
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__exptrack_exptrack__["a" /* ExptrackPage */]);
                })
                    .catch(function (err) { return alert("Please fill all details"); });
            }).catch(function (err) { return alert("Error : " + err); });
        }
    };
    EtaddPage.prototype.message = function (message) {
        var toastCtrl = this.toastCtrl.create({
            message: message,
            duration: 2000,
            position: "bottom"
        });
        toastCtrl.present();
    };
    return EtaddPage;
}());
EtaddPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-etadd',template:/*ion-inline-start:"/Users/pathakmk/Documents/ionicworkshop/trakc/src/pages/etadd/etadd.html"*/'<!--\n  Generated template for the EtaddPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar  color="yell">\n    <ion-title>Add item</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n<h5 text-center>Add item here to track expiry date. Please fill in all the fields.</h5>\n\n<ion-list style="margin-top:5;">\n    <ion-item>\n        <ion-label inset>Name of the product</ion-label>\n        <ion-input type="text" [(ngModel)]="name" required></ion-input> \n    </ion-item>\n\n    <ion-item>\n      <ion-label inset>Manufacturing Date</ion-label>\n          <ion-datetime placeholder="Enter Mfg Date"  [max]="today" type="date" [(ngModel)]="input_mfg">\n            </ion-datetime>\n    </ion-item>\n    \n    <ion-item>\n        <ion-label inset>Purchase Date</ion-label>\n        <ion-datetime placeholder="Enter Date of Purchase" [max]="today" type="date" [(ngModel)]="input_purch">\n          </ion-datetime>\n  </ion-item>\n  <ion-item>\n      <ion-label inset>Expiry Date</ion-label>      \n      <ion-datetime placeholder="Enter Expiry Date" max="2027-12-31" [(ngModel)]="input_exp">\n        </ion-datetime>\n</ion-item>\n<!-- <ion-item> -->\n  <br>\n  <br>\n<button ion-button block round color="yell" (click)="dataDb(name,input_mfg,input_purch,input_exp)">Save</button>\n<!-- </ion-item> -->\n</ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/pathakmk/Documents/ionicworkshop/trakc/src/pages/etadd/etadd.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_sqlite__["a" /* SQLite */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
], EtaddPage);

//# sourceMappingURL=etadd.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EtlogPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_sqlite__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the EtlogPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EtlogPage = (function () {
    function EtlogPage(navCtrl, socialSharing, navParams, sqlite, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.socialSharing = socialSharing;
        this.navParams = navParams;
        this.sqlite = sqlite;
        this.toastCtrl = toastCtrl;
        this.items = [];
        //  console.log("Inside constructor");
        this.sqlite.create({
            name: 'data.db',
            location: 'default'
        }).then(function (db) {
            db.executeSql("select * from Exp_Rem order by date_exp ASC", {}).then(function (data) {
                _this.items = [];
                if (data.rows.length > 0) {
                    for (var i = 0; i < data.rows.length; i++) {
                        // alert(data.rows.item(i).date_mfg);/
                        var a = data.rows.item(i).date_exp;
                        var b = (a.split('-'));
                        console.log(JSON.stringify(b));
                        var year = parseInt(b[0]), Month = parseInt(b[1]) - 1, Day = parseInt(b[2]) + 1;
                        // console.log(year + "" + Month + "" + Day );
                        // console.log(new Date(year,Month,Day));
                        var oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
                        _this.expiry = new Date(year, Month, Day);
                        // console.log(this.expiry);
                        _this.presentDate = new Date();
                        // console.log(this.presentDate);
                        _this.diffDays = Math.round((_this.expiry.getTime() - _this.presentDate.getTime()) / (oneDay));
                        // console.log(this.diffDays);
                        // console.log(this.expiry.getTime());
                        // console.log(this.presentDate.getTime());
                        _this.items.push({ name: data.rows.item(i).name, mfg: data.rows.item(i).date_mfg, purch: data.rows.item(i).date_purch, Exp: data.rows.item(i).date_exp, Count: _this.diffDays });
                    }
                    _this.message("Data retrival successful");
                }
                else {
                    _this.message("0 Results");
                }
            }).catch(function (err) { return alert("Save atleat one entry to view records!"); });
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
    EtlogPage.prototype.delete = function (item) {
        var _this = this;
        this.sqlite.create({
            name: 'data.db',
            location: 'default'
        }).then(function (db) {
            db.executeSql("delete from Exp_Rem where name = ?", [item.name]).then(function (data) {
                var index = _this.items.indexOf(item);
                if (index > -1) {
                    _this.items.splice(index, 1);
                }
                _this.message("Data removed successfully.");
            });
        });
    };
    EtlogPage.prototype.message = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 2000,
            position: 'bottom'
        });
        toast.present();
    };
    EtlogPage.prototype.share = function (item) {
        var _this = this;
        this.socialSharing.share("\'" + item.name + "\' is expiring on \'" + item.Exp + "\'. Purchased on : \'" + item.purch + "\' and Manufactuting date : \'" + item.mfg + "\'. - via When n Where App").
            then(function () {
            _this.message("Sharing success");
            // Success!
        }).catch(function () {
            // Error!
            _this.message("Share failed");
        });
    };
    EtlogPage.prototype.ionViewDidLoad = function () {
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
    };
    return EtlogPage;
}());
EtlogPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-etlog',template:/*ion-inline-start:"/Users/pathakmk/Documents/ionicworkshop/trakc/src/pages/etlog/etlog.html"*/'<!--\n  Generated template for the EtlogPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="yell">\n    <ion-title>The When List</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <p text-center>* Please swipe left on an item for more options.</p>\n    <ion-list>\n        <ion-item-sliding *ngFor="let item of items" id="item">\n            \n            <ion-item >\n              <!-- <ion-avatar item-start>\n                <img src="assets/img/avatar-ts-woody.png">\n              </ion-avatar> -->\n              <ion-row>\n                <ion-col>\n                    <h1 class="sub_heading" style="font-weight: bold;">{{item.name}}</h1> \n                    <p class="sub_heading"><span style="font-weight: bold;color: #1abc9c">Mfg : </span> {{item.mfg}}</p>\n                    <p class="sub_heading"><span style="font-weight: bold;color: #1abc9c">Purchase :</span> {{item.purch}}</p>\n                    <p class="sub_heading"><span style="font-weight: bold;color: #1abc9c">Exp : </span><span id="expiry">{{item.Exp}}</span></p>\n                </ion-col>\n                <ion-col text-center>\n                  <div  *ngIf="item.Count < 0">\n                    <br>\n                    <br>\n                    <span id="expired">Expired!</span>\n\n                  </div>\n                  <h2 style="font-weight: bold;color: #e74c3c" *ngIf="item.Count >= 0">Days to Expire</h2>\n                  <br>\n                  <span id="count" *ngIf="item.Count >= 0">{{item.Count}}</span>\n                </ion-col>\n              </ion-row>\n               <!-- <ion-icon name="remove-circle" item-right (click)="delete(item)"></ion-icon> -->\n            </ion-item>\n       \n            <ion-item-options>\n                <button ion-button color="primary" icon-start (click)="share(item)">\n                    <ion-icon name="share"></ion-icon>\n                    Share\n                  </button> \n              <button ion-button color="danger" icon-start (click)="delete(item)">\n                  <ion-icon name="remove-circle"></ion-icon>\n                  Delete\n                </button>\n               \n  \n                \n              </ion-item-options>\n            \n           \n          </ion-item-sliding>               \n          </ion-list>\n\n<!-- <button ion-button block (click)="set()">Set reminder</button> -->\n\n\n\n    <!-- <ion-list>\n        <ion-item *ngFor="let item of items" id="item" no-lines>\n          <span (click)="saveDetails(item.name)" item-left>{{item.name}}</span>\n            <ion-icon name="remove-circle" item-right (click)="delete(item)"></ion-icon>\n        </ion-item>\n      </ion-list> -->\n</ion-content>\n'/*ion-inline-end:"/Users/pathakmk/Documents/ionicworkshop/trakc/src/pages/etlog/etlog.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__["a" /* SocialSharing */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_sqlite__["a" /* SQLite */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
], EtlogPage);

//# sourceMappingURL=etlog.js.map

/***/ }),

/***/ 118:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 118;

/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/etadd/etadd.module": [
		283,
		7
	],
	"../pages/etlog/etlog.module": [
		284,
		6
	],
	"../pages/exptrack/exptrack.module": [
		285,
		5
	],
	"../pages/iladd/iladd.module": [
		279,
		4
	],
	"../pages/illog/illog.module": [
		280,
		3
	],
	"../pages/itemloc/itemloc.module": [
		282,
		2
	],
	"../pages/others/others.module": [
		278,
		1
	],
	"../pages/pin-set/pin-set.module": [
		281,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 159;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__itemloc_itemloc__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__exptrack_exptrack__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__exptrack_exptrack__["a" /* ExptrackPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__itemloc_itemloc__["a" /* ItemlocPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-tabs',template:/*ion-inline-start:"/Users/pathakmk/Documents/ionicworkshop/trakc/src/pages/tabs/tabs.html"*/'    <ion-tabs color=\'yell\'>\n        \n  <ion-tab [root]="tab1Root" tabTitle="When" tabIcon="analytics"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Where" tabIcon="archive"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="More" tabIcon="more"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/pathakmk/Documents/ionicworkshop/trakc/src/pages/tabs/tabs.html"*/
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_app_rate__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__others_others__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_social_sharing__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AboutPage = (function () {
    function AboutPage(navCtrl, iab, navParams, alertCtrl, appRate, socialSharing, toastCtrl) {
        this.navCtrl = navCtrl;
        this.iab = iab;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.appRate = appRate;
        this.socialSharing = socialSharing;
        this.toastCtrl = toastCtrl;
    }
    AboutPage.prototype.HowToAlert = function (param) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__others_others__["a" /* OthersPage */], { param: param });
        // // let alert = this.alertCtrl.create({
        // //   title: 'How to use When n Where',
        // //   subTitle: 'When n Where can be used to record and track the expiry (best before) dates of grocery items and even medicines. Select the When tab in app and fill in the deatils. The app will later show you details through the "View Items" button. Similarly',
        // //   buttons: ['Okay!']
        // // });
        // alert.present();
    };
    AboutPage.prototype.aboutUs = function (param1) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__others_others__["a" /* OthersPage */], { param1: param1 });
        // let alert = this.alertCtrl.create({
        //     title: 'About us!',
        //     subTitle: 'The developer has no name. Okay kidding, WordsApp has been developed by Mukul Pathak.',
        //       buttons: ['Okay!']
        //   });
        //   alert.present();
    };
    // getWords(){
    //   const browser = this.iab.create('http://mukulpathak.com/wordsapp','_self',{location:'no'}); 
    // }
    AboutPage.prototype.shareWnw = function () {
        var _this = this;
        this.socialSharing.share("Hey! download the When n' Where App and keep a track of your household items. To download the app visit http://mukulpathak.com/wnw").
            then(function () {
            _this.message("Sharing success");
            // Success!
        }).catch(function () {
            // Error!
            _this.message("Share failed");
        });
    };
    AboutPage.prototype.rateFive = function () {
        this.appRate.preferences.storeAppURL = {
            ios: '1288671603',
            android: 'https://play.google.com/store/apps/details?id=com.mukulpathak.wnw',
        };
        this.appRate.promptForRating(true);
        // or, override the whole preferences object
        this.appRate.preferences = {
            usesUntilPrompt: 3,
            storeAppURL: {
                ios: '1288671603',
                android: 'https://play.google.com/store/apps/details?id=com.mukulpathak.wnw',
            }
        };
        this.appRate.promptForRating(false);
    };
    AboutPage.prototype.message = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 2000,
            position: 'bottom'
        });
        toast.present();
    };
    return AboutPage;
}());
AboutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-about',template:/*ion-inline-start:"/Users/pathakmk/Documents/ionicworkshop/trakc/src/pages/about/about.html"*/'<ion-header>\n    \n      <ion-navbar color="yell">\n        <ion-title>Where n\' When</ion-title>\n      </ion-navbar>\n    \n    </ion-header>\n\n<!-- style="background-color:#1abc9c" -->\n<ion-content padding>\n    <!-- <div style="text-align:center;padding:10px;">\n   <span (click)="back()" float-left style="font-size:20px;"><ion-icon name="md-arrow-back"></ion-icon></span>\n  <span style="font-size:20px;height:12vh;font-weight:bold;">Where n\' When</span>\n</div>   -->\n  \n<ion-list >\n \n        <ion-item no-padding (click)="HowToAlert(\'howto\')" id="ItemCol" text-wrap>\n            <ion-icon name="help-buoy" style="color: #1abc9c"></ion-icon><span style="font-size: 16px; margin-left:5px;">How to use? </span> \n       <!-- <ion-icon name="bulb"></ion-icon> -->\n\n      \n  </ion-item>  \n\n   <ion-item no-padding (click)="aboutUs(\'about\')" id="ItemCol" text-wrap>\n      <ion-icon name="contacts" style="color: #1abc9c"></ion-icon><span style="font-size: 16px; margin-left:5px;"> About Us </span>\n      \n  </ion-item>  \n\n   <ion-item no-padding  (click)="rateFive()" id="ItemCol" text-wrap>\n      <ion-icon name="star" style="color: #1abc9c"></ion-icon>\n      <span  style="font-size: 16px; margin-left:5px;">  Rate us 5 stars!</span> \n      \n  </ion-item>  \n\n<!-- <ion-item no-padding (click)="getWords()" id="ItemCol" text-wrap>\n    <ion-icon name="bowtie" style="color: #1abc9c;"></ion-icon>\n     <span  style="font-size: 16px; margin-left:5px;"> Build your Vocabulary! </span>\n      \n  </ion-item>  -->\n\n  <ion-item no-padding (click)="shareWnw()" id="ItemCol" text-wrap>\n      <ion-icon name="share" style="color: #1abc9c;"></ion-icon>\n       <span  style="font-size: 16px; margin-left:5px;"> Share When n\' Where </span>\n        \n    </ion-item> \n\n</ion-list>\n</ion-content>'/*ion-inline-end:"/Users/pathakmk/Documents/ionicworkshop/trakc/src/pages/about/about.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_app_rate__["a" /* AppRate */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_social_sharing__["a" /* SocialSharing */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
], AboutPage);

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(226);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_itemloc_itemloc__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_exptrack_exptrack__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_others_others__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_pin_set_pin_set__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_etlog_etlog__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_etadd_etadd__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_illog_illog__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_iladd_iladd__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_sqlite__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_camera__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_local_notifications__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_app_rate__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_in_app_browser__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_social_sharing__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_pin_dialog__ = __webpack_require__(83);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_itemloc_itemloc__["a" /* ItemlocPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_exptrack_exptrack__["a" /* ExptrackPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_etadd_etadd__["a" /* EtaddPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_etlog_etlog__["a" /* EtlogPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_iladd_iladd__["a" /* IladdPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_illog_illog__["a" /* IllogPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_others_others__["a" /* OthersPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_pin_set_pin_set__["a" /* PinSetPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/others/others.module#OthersPageModule', name: 'OthersPage', segment: 'others', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/iladd/iladd.module#IladdPageModule', name: 'IladdPage', segment: 'iladd', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/illog/illog.module#IllogPageModule', name: 'IllogPage', segment: 'illog', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/pin-set/pin-set.module#PinSetPageModule', name: 'PinSetPage', segment: 'pin-set', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/itemloc/itemloc.module#ItemlocPageModule', name: 'ItemlocPage', segment: 'itemloc', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/etadd/etadd.module#EtaddPageModule', name: 'EtaddPage', segment: 'etadd', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/etlog/etlog.module#EtlogPageModule', name: 'EtlogPage', segment: 'etlog', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/exptrack/exptrack.module#ExptrackPageModule', name: 'ExptrackPage', segment: 'exptrack', priority: 'low', defaultHistory: [] }
                ]
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_itemloc_itemloc__["a" /* ItemlocPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_exptrack_exptrack__["a" /* ExptrackPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_etadd_etadd__["a" /* EtaddPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_etlog_etlog__["a" /* EtlogPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_iladd_iladd__["a" /* IladdPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_illog_illog__["a" /* IllogPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_others_others__["a" /* OthersPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_pin_set_pin_set__["a" /* PinSetPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_16__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_15__ionic_native_sqlite__["a" /* SQLite */],
            __WEBPACK_IMPORTED_MODULE_18__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_20__ionic_native_app_rate__["a" /* AppRate */],
            __WEBPACK_IMPORTED_MODULE_19__ionic_native_local_notifications__["a" /* LocalNotifications */],
            __WEBPACK_IMPORTED_MODULE_21__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_22__ionic_native_social_sharing__["a" /* SocialSharing */],
            __WEBPACK_IMPORTED_MODULE_23__ionic_native_pin_dialog__["a" /* PinDialog */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_sqlite__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, sqlite) {
        this.sqlite = sqlite;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/pathakmk/Documents/ionicworkshop/trakc/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/pathakmk/Documents/ionicworkshop/trakc/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_sqlite__["a" /* SQLite */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/pathakmk/Documents/ionicworkshop/trakc/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h2>Welcome to Ionic!</h2>\n  <p>\n    This starter project comes with simple tabs-based layout for apps\n    that are going to primarily use a Tabbed UI.\n  </p>\n  <p>\n    Take a look at the <code>src/pages/</code> directory to add or change tabs,\n    update any existing page or create new pages.\n  </p>\n</ion-content>\n'/*ion-inline-end:"/Users/pathakmk/Documents/ionicworkshop/trakc/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemlocPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__iladd_iladd__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__illog_illog__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_sqlite__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_pin_dialog__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pin_set_pin_set__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the ItemlocPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ItemlocPage = (function () {
    function ItemlocPage(navCtrl, navParams, pinDialog, sqlite, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.pinDialog = pinDialog;
        this.sqlite = sqlite;
        this.toastCtrl = toastCtrl;
        this.pin_error = "Enter Pin";
    }
    ItemlocPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ItemlocPage');
    };
    ItemlocPage.prototype.GotoIladd = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__iladd_iladd__["a" /* IladdPage */]);
    };
    ItemlocPage.prototype.GotoIllog = function () {
        var _this = this;
        this.sqlite.create({
            name: 'yash.db',
            location: 'default'
        }).then(function (db) {
            db.executeSql("create table if not exists pin(code number(4))", {}).then(function (res) { }).catch(function (err) { return alert(err); });
            db.executeSql("select * from pin", {}).then(function (selectRes) {
                // alert(JSON.stringify(selectRes));
                if (selectRes.rows.length == '0') {
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__pin_set_pin_set__["a" /* PinSetPage */]);
                }
                else {
                    // this.navCtrl.push(EtlogPage);
                    _this.pinPopUp();
                }
            }).catch(function (selectErr) {
                _this.message('Error No Data is available for pin');
            });
        }).catch(function (e) { alert(e); });
        this.sqlite.create({
            name: 'yash.db',
            location: 'default'
        }).then(function (db) {
            db.executeSql("select * from pin", {}).then(function (selectRes) {
                // alert(JSON.stringify(selectRes.rows.item(0)) + selectRes.rows.length);
                for (var i = 0; i < selectRes.rows.length; i++) {
                    _this.pin = selectRes.rows.item(i).code;
                }
                // alert(this.pin);
            });
        }).catch(function (e) { alert(e); });
        // this.navCtrl.push(IllogPage);
    };
    ItemlocPage.prototype.pinPopUp = function () {
        var _this = this;
        this.pinDialog.prompt(this.pin_error, 'Enter Pin to Access Item Locator Content', ['OK', 'Cancel'])
            .then(function (result) {
            if (result.buttonIndex == 1) {
                // this.message("Pressed on OK"); 
                if (result.input1 == _this.pin) {
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__illog_illog__["a" /* IllogPage */]);
                }
                else {
                    _this.pin_error = "Invalid Pin";
                    // this.message("Please enter valid pin");
                    _this.pinPopUp();
                }
            }
        });
    };
    ItemlocPage.prototype.message = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: "bottom"
        });
        toast.present();
    };
    return ItemlocPage;
}());
ItemlocPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-itemloc',template:/*ion-inline-start:"/Users/pathakmk/Documents/ionicworkshop/trakc/src/pages/itemloc/itemloc.html"*/'<!--\n  Generated template for the ItemlocPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="yell">\n    <ion-title text-center>Item locator</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="card-background-page" padding>\n  \n\n    <img style="margin-top:70px;padding-right:26px" src="assets/5.png">\n    \n<p style="font-size: 13px;margin-bottom:30px;" text-center>Track where all the important documents or items are by recording details of their locations here.</p>\n<ion-buttons style="margin: 0 30px 0 30px">\n  <button ion-button block round color="yell" (click)="GotoIladd()">Add Item</button>\n  <button ion-button block round color="yell" (click)="GotoIllog()">View Items</button>\n  \n</ion-buttons>\n\n\n\n\n    <!-- <ion-card>\n      <div class="card-title">View Log</div>\n      <div class="card-subtitle">44 Listings</div>\n    </ion-card>\n  \n    <ion-card  (click)="GotoIladd()">\n      <div class="card-title">Add Entry</div>\n      <div class="card-subtitle">Add item location here</div>\n    </ion-card> -->\n</ion-content>'/*ion-inline-end:"/Users/pathakmk/Documents/ionicworkshop/trakc/src/pages/itemloc/itemloc.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_pin_dialog__["a" /* PinDialog */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_sqlite__["a" /* SQLite */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
], ItemlocPage);

//# sourceMappingURL=itemloc.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PinSetPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_sqlite__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the PinSetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PinSetPage = (function () {
    function PinSetPage(navCtrl, sqlite, navParams, toastCtrl) {
        this.navCtrl = navCtrl;
        this.sqlite = sqlite;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
    }
    PinSetPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PinSetPage');
    };
    PinSetPage.prototype.setpin = function (password) {
        var _this = this;
        var count = password.length;
        if (count > '4') {
            this.message("Please enter a 4 digit pass");
        }
        else {
            this.sqlite.create({
                name: 'yash.db',
                location: 'default'
            }).then(function (db) {
                // alert(password);
                db.executeSql("insert into pin(code) values (?)", [password]).then(function (insertRes) {
                    _this.message("Pin Created");
                    _this.navCtrl.pop();
                }).catch(function (err) { return alert(err); });
            }).catch(function (err) { return alert(err); });
        }
    };
    PinSetPage.prototype.message = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: "bottom"
        });
        toast.present();
    };
    return PinSetPage;
}());
PinSetPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-pin-set',template:/*ion-inline-start:"/Users/pathakmk/Documents/ionicworkshop/trakc/src/pages/pin-set/pin-set.html"*/'<!--\n  Generated template for the PinSetPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="yell">\n    <ion-title>Set Pin</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-title text-center style="background-color:gray; color:white;">\n        Enter 4 Digit Pin\n      </ion-card-title>\n<ion-card-content>\n  <p text-center>* Pin should be of 4 digits.</p>\n  <ion-item>\n    <ion-label>Enter Pin</ion-label>\n      <ion-input type="number" [(ngModel)]="pin"></ion-input> \n  </ion-item>\n  <ion-item>\n      <ion-label>Confirm Pin</ion-label>\n      <ion-input type="number" [(ngModel)]="cpin"></ion-input>\n  </ion-item>\n  <ion-row>\n    <ion-col col-2></ion-col>\n    <ion-col col-8>\n  <button ion-button block [disabled]="(pin != cpin) || (pin == null) || (cpin == null) || (pin.length < 4) || (pin.length > 4)" (click)="setpin(pin)" color="yell">Set Pin</button>    \n    </ion-col>\n    <ion-col col-2></ion-col>\n  </ion-row>\n</ion-card-content>\n  </ion-card>\n  \n</ion-content>\n'/*ion-inline-end:"/Users/pathakmk/Documents/ionicworkshop/trakc/src/pages/pin-set/pin-set.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_sqlite__["a" /* SQLite */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
], PinSetPage);

//# sourceMappingURL=pin-set.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExptrackPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__etadd_etadd__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__etlog_etlog__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pin_set_pin_set__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_pin_dialog__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_sqlite__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the ExptrackPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ExptrackPage = (function () {
    function ExptrackPage(navCtrl, sqlite, toastCtrl, navParams, pinDialog) {
        this.navCtrl = navCtrl;
        this.sqlite = sqlite;
        this.toastCtrl = toastCtrl;
        this.navParams = navParams;
        this.pinDialog = pinDialog;
        this.pin_error = "Enter Pin";
    }
    ExptrackPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ExptrackPage');
    };
    ExptrackPage.prototype.MoveEtadd = function () {
        //push another page onto the history stack
        //causing the nav controller to animate the new page in
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__etadd_etadd__["a" /* EtaddPage */]);
    };
    ExptrackPage.prototype.MoveEtlog = function () {
        var _this = this;
        this.sqlite.create({
            name: 'yash.db',
            location: 'default'
        }).then(function (db) {
            db.executeSql("create table if not exists pin(code number(4))", {}).then(function (res) { }).catch(function (err) { return alert(err); });
            db.executeSql("select * from pin", {}).then(function (selectRes) {
                // alert(JSON.stringify(selectRes));
                if (selectRes.rows.length == '0') {
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pin_set_pin_set__["a" /* PinSetPage */]);
                }
                else {
                    // this.navCtrl.push(EtlogPage);
                    _this.pinPopUp();
                }
            }).catch(function (selectErr) {
                _this.message('Error No Data is available for pin');
            });
        }).catch(function (e) { alert(e); });
        this.sqlite.create({
            name: 'yash.db',
            location: 'default'
        }).then(function (db) {
            db.executeSql("select * from pin", {}).then(function (selectRes) {
                // alert(JSON.stringify(selectRes.rows.item(0)) + selectRes.rows.length);
                for (var i = 0; i < selectRes.rows.length; i++) {
                    _this.pin = selectRes.rows.item(i).code;
                }
                // alert(this.pin);
            });
        }).catch(function (e) { alert(e); });
    };
    ExptrackPage.prototype.pinPopUp = function () {
        var _this = this;
        this.pinDialog.prompt(this.pin_error, 'Enter Pin to Access Expiry Date Content', ['OK', 'Cancel'])
            .then(function (result) {
            if (result.buttonIndex == 1) {
                // this.message("Pressed on OK"); 
                if (result.input1 == _this.pin) {
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__etlog_etlog__["a" /* EtlogPage */]);
                }
                else {
                    _this.pin_error = "Invalid Pin";
                    // this.message("Please enter valid pin");
                    _this.pinPopUp();
                }
            }
        });
    };
    ExptrackPage.prototype.message = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: "bottom"
        });
        toast.present();
    };
    return ExptrackPage;
}());
ExptrackPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-exptrack',template:/*ion-inline-start:"/Users/pathakmk/Documents/ionicworkshop/trakc/src/pages/exptrack/exptrack.html"*/'<!--\n  Generated template for the ExptrackPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="yell">\n    <ion-title text-center>Expiry Date Tracker</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <img style="    margin-top:-40px;padding-right:26px"\n    src="assets/6.png">\n    \n<p style="font-size: 13px;margin-bottom:30px;" text-center>Track the expiry date of all your medicines and grocery items by adding the details of item here.</p>\n<ion-buttons style="margin: 0 30px 0 30px">\n  <button ion-button block round color="yell" (click)="MoveEtadd()">Add Item</button>\n  <button ion-button block round color="yell" (click)="MoveEtlog()">View Items</button>\n  <!-- <button ion-button block (click)="delete()">Delete</button> -->\n  \n</ion-buttons>\n\n  <!-- <ion-content class="card-background-page">\n    \n      <ion-card (click)="MoveEtlog()">\n        <img src="img/card-saopaolo.png"/>\n        <div class="card-title">View Log</div>\n        <div class="card-subtitle">41 Listings</div>\n      </ion-card>\n    \n      <ion-card  (click)="MoveEtadd()">\n        <img src="img/card-amsterdam.png"/>\n        <div class="card-title">Add Entry</div>\n        <div class="card-subtitle">Add expiry dates here</div>\n      </ion-card>\n  </ion-content> -->\n</ion-content>\n'/*ion-inline-end:"/Users/pathakmk/Documents/ionicworkshop/trakc/src/pages/exptrack/exptrack.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_sqlite__["a" /* SQLite */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_pin_dialog__["a" /* PinDialog */]])
], ExptrackPage);

//# sourceMappingURL=exptrack.js.map

/***/ })

},[207]);
//# sourceMappingURL=main.js.map