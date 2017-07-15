import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { InicioTrivia } from '../../pages/inicio-trivia/inicio-trivia';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'

})
export class HomePage {
      items: FirebaseListObservable<any>;

   u:string;
  constructor(public navCtrl: NavController,public navParams:NavParams,db:AngularFireDatabase) {
    this.items=db.list('/Items');
    this.u= this.navParams.get('user');
  
  }
  Comenzar(){
   this.navCtrl.push(InicioTrivia,{
           usuario:this.u
   });


  }

}