import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { HomePage } from '../../pages/home/home';

import * as firebase from 'firebase/app';

/**
 * Generated class for the Resultados page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-resultados',
  templateUrl: 'resultados.html',
})
export class Resultados {
    items: FirebaseListObservable<any>;

    usuario={
      nombre:'',
      puntaje:0,
      resElegida:[]
    };


  constructor(public navCtrl: NavController, public navParams: NavParams,db:AngularFireDatabase) {
    this.items=db.list('/Items');
    console.log("FIREBASE"+this.items);
    this.usuario.nombre=this.navParams.get('nombre');
    this.usuario.puntaje=this.navParams.get('puntaje');
    this.usuario.resElegida=this.navParams.get('resElegida');
          this.items.push({
       Nombre:this.usuario.nombre,
       Puntaje:this.usuario.puntaje,
       RespuestaElegida:this.usuario.resElegida
    })
  }
  alHome(){
       this.navCtrl.setRoot(HomePage,{
             user:this.usuario.nombre
       });

  }
  ionViewDidLoad() {
  
     console.log("RESULTADOS DEL JUEGO:"+this.usuario.nombre+"//"+this.usuario.puntaje);

  }

}
