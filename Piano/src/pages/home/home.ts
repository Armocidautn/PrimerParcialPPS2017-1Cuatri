import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { File } from '@ionic-native/file';
import { NativeAudio } from '@ionic-native/native-audio';
import { Vibration } from '@ionic-native/vibration';
import {AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable  } from 'angularfire2/database';
import { Secuencia } from '../../pages/secuencia/secuencia';
import * as firebase from 'firebase/app';
import {AndroidFullScreen } from'@ionic-native/android-full-screen';
import { About } from '../../pages/about/about';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    condicion0:boolean;
    condicion1:boolean;
    condicion2:boolean;

   sonidosRep=[];
   arrayAguardar=[];
   arrayJSON:any;
  items: FirebaseListObservable<any>;
    nombre:any;
    sonidos1:any;
    sonidos2:any;
    sonidos3:any;
    sonidoBtn0:any;
    sonidoBtn1:any;
    sonidoBtn2:any;
  constructor(public navCtrl: NavController,public navparams:NavParams,public androidfullscreen:AndroidFullScreen,public vibration:Vibration,public Af:AngularFireDatabase,public file:File,public ntAudio:NativeAudio) {
      this.items=this.Af.list('/DatosPiano');
  this.androidfullscreen.isImmersiveModeSupported().then(()=> this.androidfullscreen.immersiveMode()).catch((error:any)=>console.log(error));
           this.nombre=this.navparams.get('user');
          this.ntAudio.preloadSimple('arpa','assets/sonidos/arpa.mp3');
          this.ntAudio.preloadSimple('guitarra','assets/sonidos/guitarraElectrica.mp3');
          this.ntAudio.preloadSimple('flauta','assets/sonidos/flauta.mp3');
          this.ntAudio.preloadSimple('piano','assets/sonidos/piano.mp3');
          this.ntAudio.preloadSimple('platillos','assets/sonidos/platillos.mp3');
          this.ntAudio.preloadSimple('violin','assets/sonidos/violin.mp3');
 this.file.createFile(this.file.externalDataDirectory,"Sonidos.txt",true);
        
       this.condicion0=false;
this.condicion1=false;
this.condicion2=false;
                    
     }
      
      reproducir(op){
               
             if(op==0){
               this.vibration.vibrate(1000);
                this.ntAudio.play('guitarra');
                this.sonidosRep.push("guitarra");
             }  
            if(op==1){
              this.vibration.vibrate(1000);
                this.ntAudio.play('flauta');
                this.sonidosRep.push("flauta");
           
           }
              if(op==2){
                this.vibration.vibrate(1000);
                this.ntAudio.play('arpa');
                this.sonidosRep.push("arpa");
           
            }  
              if(op==3){
                this.vibration.vibrate(1000);
                this.ntAudio.play('platillos');
                this.sonidosRep.push("platillos");
          
            }  
              if(op==4){
                this.vibration.vibrate(1000);
                this.ntAudio.play('violin');
                this.sonidosRep.push("violin");
            
           }  
              if(op==5){
                this.vibration.vibrate(1000);
                this.ntAudio.play('piano');
                this.sonidosRep.push("piano");
            
           }    
         this.arrayJSON=JSON.stringify(this.sonidosRep);
         console.log("ARRAY DE SONIDOS"+this.arrayJSON);
     this.file.writeExistingFile(this.file.externalDataDirectory,"Sonidos.txt",this.arrayJSON);  
    this.sonidos1=this.sonidosRep.length-3;
    this.sonidos2=this.sonidosRep.length-2;
    this.sonidos3=this.sonidosRep.length-1;
    this.arrayAguardar=[this.sonidosRep[this.sonidos1],this.sonidosRep[this.sonidos2],this.sonidosRep[this.sonidos3]];  
     this.sonidoBtn0=this.arrayAguardar[0];
     this.sonidoBtn1=this.arrayAguardar[1];
     this.sonidoBtn2=this.arrayAguardar[2];
     if(this.sonidoBtn0!=undefined){
       this.condicion0=true;
     }
     if(this.sonidoBtn1!=undefined){
       this.condicion1=true;
     }
      if(this.sonidoBtn2!=undefined){
       this.condicion2=true;
     }

  }
    ReproducirS0(){

         this.ntAudio.play(this.arrayAguardar[0]);
    
  }
   ReproducirS1(){

         this.ntAudio.play(this.arrayAguardar[1]);
    
  }
   ReproducirS2(){

         this.ntAudio.play(this.arrayAguardar[2]);
    
  }
  about(){
   this.navCtrl.push(About);

  }
   GuardarSecuencia(){
  
    this.sonidos1=this.sonidosRep.length-3;
    this.sonidos2=this.sonidosRep.length-2;
    this.sonidos3=this.sonidosRep.length-1;
    this.arrayAguardar=[this.sonidosRep[this.sonidos1],this.sonidosRep[this.sonidos2],this.sonidosRep[this.sonidos3]];
       

       
    
     console.log("CANTIDAD DE SONIDOS:"+this.arrayAguardar);
        this.items.push({
       Nombre:this.nombre,
       Sonidos:this.arrayAguardar
     });
     
     this.navCtrl.setRoot(Secuencia,{
       nombre:this.nombre
     });
   }
   
}
