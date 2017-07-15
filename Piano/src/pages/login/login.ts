import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../../pages/home/home';

@IonicPage()

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {
    user: string;
    pass:string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
   login(){    
         this.navParams.data=this.user;
         this.navCtrl.setRoot(HomePage,{
            user: this.user
         });
      

     
   }


  

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }

}
