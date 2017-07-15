import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import {Piedrapapeltijera} from '../piedrapapeltijera/piedrapapeltijera' 
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  preserveSnapshot: true;
   valores={
      nombre:'',
      resultados:''
   };
   ganadores:any[];
   empatados:any[];
   perdedores:any[];
   items: FirebaseListObservable<any>;
     i:number;
     j:number;
     k:number;
     u:any;
  constructor(public navCtrl: NavController,db :AngularFireDatabase,public navparams: NavParams) {
        this.items=db.list('/ppt');
        this.ganadores=[''];
        this.empatados=[''];
        this.perdedores=[''];
          this.i=0;
          this.j=0;
          this.k=0;
          
        db.list('ppt', { preserveSnapshot: true})
    .subscribe(snapshots=>{
        snapshots.forEach(snapshot => {
             if(snapshot.val().Resultado=="GANASTE"){  
             
               this.ganadores[this.i]=snapshot.val().Nombre;
                   this.i=this.i+1;  
            }
              if(snapshot.val().Resultado=="PERDISTE"){  
             
               this.perdedores[this.j]=snapshot.val().Nombre;
                   this.j=this.j+1;  
            }
              if(snapshot.val().Resultado=="EMPATE"){  
             
               this.empatados[this.k]=snapshot.val().Nombre;
                   this.k=this.k+1;  
            }
           console.log(snapshot.key, snapshot.val());
        });
    })
    
    console.log("VALORES"+this.valores.nombre);
     this.u=this.navparams.get("user");
  }
   irAppt(){

     this.navCtrl.push(Piedrapapeltijera,{
          usuario:this.u     
     });
   }
  
}
