import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule,AngularFireDatabase,FirebaseListObservable } from 'angularfire2/database';
import { HomePage } from '../../pages/home/home';

/**
 * Generated class for the Secuencia page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-secuencia',
  templateUrl: 'secuencia.html',
})
export class Secuencia {
items:FirebaseListObservable<any>;
   usuario={
     nombre:'',
     Sonidos:[]
   };

   constructor(public navCtrl: NavController,public af:AngularFireDatabase, public navParams: NavParams) {
     this.items=this.af.list('/DatosPiano');      
      this.usuario.nombre=this.navParams.get('nombre');
            af.list('DatosPiano', { preserveSnapshot: true})
    .subscribe(snapshots=>{
        snapshots.forEach(snapshot => {
             if(snapshot.val().Nombre==this.usuario.nombre){  
                         
               this.usuario.Sonidos=snapshot.val().Sonidos;
                    
            }
             
           console.log(snapshot.key, snapshot.val());
        });
    })
 }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Secuencia'+this.items);
  }
 alHome(){
      this.navCtrl.push(HomePage,{
            user:this.usuario.nombre
      });
 }

}
