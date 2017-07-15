import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Piedrapapeltijera } from '../../pages/piedrapapeltijera/piedrapapeltijera';


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
      result:'',
      date:new Date()
   };
    num:number;
    n:any;
    numero:any;
    numeroUsu:number;
    user:any;
    u:any;
     elegidoUsu:any;
     elegidoMaq:any;
     resultado:any;
  constructor(public navCtrl: NavController,public alertCtrl: AlertController, db: AngularFireDatabase, public navParams: NavParams) {
     this.items=db.list('/ppt');
    this.num=this.navParams.get('numMaquina');
    this.n=this.navParams.get('eleccionUsuario');
     this.user=this.navParams.get('usuario');
     console.log("USER"+this.user);
      this.numeroUsu=this.n;
     this.numero=this.num;
     this.u=this.user;
       this.usuario.nombre=this.user;
 this.usuario.date=new Date();
 console.log("FECHA"+this.usuario.date);

}
   

  ionViewDidLoad() {
     if(this.numeroUsu==0 && this.numero==0){
       this.usuario.date=new Date();
        this.elegidoUsu="assets/imagenes/piedra.png";
        this.elegidoMaq="assets/imagenes/piedra.png";
          this.resultado="EMPATE";
        this.usuario.result=this.resultado;   
           this.items.push({
              
              Nombre:this.usuario.nombre,
              Resultado:this.usuario.result
           });
        console.log("EMPATE");
     }    
       if(this.numeroUsu==0 && this.numero==1){
       this.elegidoUsu="assets/imagenes/piedra.png";
        this.elegidoMaq="assets/imagenes/papel.png";
          this.resultado="PERDISTE";
          this.usuario.result=this.resultado;
        console.log("PERDISTE");
          this.items.push({
        
              Nombre:this.usuario.nombre,
              Resultado:this.usuario.result
           });
     }    
    if(this.numeroUsu==0 && this.numero==2){
       this.elegidoUsu="assets/imagenes/piedra.png";
      this.elegidoMaq="assets/imagenes/tijera.png";
          this.resultado="GANASTE";
             this.usuario.result=this.resultado;
        console.log("GANASTE");
      this.items.push({
            
              Nombre:this.usuario.nombre,
              Resultado:this.usuario.result
                       });}    
  if(this.numeroUsu==1 && this.numero==0){
       this.elegidoUsu="assets/imagenes/papel.png";
     this.elegidoMaq="assets/imagenes/piedra.png";
         this.resultado="GANASTE";
            this.usuario.result=this.resultado;
        console.log("GANASTE");
     this.items.push({
                
              Nombre:this.usuario.nombre,
              Resultado:this.usuario.result
           }); }    
       if(this.numeroUsu==1 && this.numero==1){
          this.elegidoUsu="assets/imagenes/papel.png";
        this.elegidoMaq="assets/imagenes/papel.png";
          this.resultado="EMPATE";
   this.usuario.result=this.resultado;
   this.items.push({
              
              Nombre:this.usuario.nombre,
              Resultado:this.usuario.result
            
           });    console.log("EMPATE");
     }    
       if(this.numeroUsu==1 && this.numero==2){
          this.elegidoUsu="assets/imagenes/papel.png";
              this.elegidoMaq="assets/imagenes/tijera.png";
         this.resultado="PERDISTE";
            this.usuario.result=this.resultado;
        console.log("PERDISTE");
     this.items.push({

              Nombre:this.usuario.nombre,
              Resultado:this.usuario.result
        
           }); }
       if(this.numeroUsu==2 && this.numero==0){
          this.elegidoUsu="assets/imagenes/tijera.png";
              this.elegidoMaq="assets/imagenes/piedra.png";
        this.resultado="PERDISTE";
           this.usuario.result=this.resultado;
        console.log("PERDISTE");
     this.items.push({
              
              Nombre:this.usuario.nombre,
              Resultado:this.usuario.result
            
           }); }        
       if(this.numeroUsu==2 && this.numero==1){
          this.elegidoUsu="assets/imagenes/tijera.png";
              this.elegidoMaq="assets/imagenes/papel.png";
         this.resultado="GANASTE";
            this.usuario.result=this.resultado;
        console.log("GANASTE");
     this.items.push({
            
              Nombre:this.usuario.nombre,
              Resultado:this.usuario.result
          
           }); }    
       if(this.numeroUsu==2 && this.numero==2){
              this.elegidoUsu="assets/imagenes/tijera.png";
                   this.elegidoMaq="assets/imagenes/tijera.png";
          this.resultado="EMPATE";
             this.usuario.result=this.resultado;
   this.items.push({
      
              Nombre:this.usuario.nombre,
              Resultado:this.usuario.result
  
           });  console.log("EMPATE");
     }    
  }
  reintentar(){
    this.navCtrl.push(Piedrapapeltijera,{
         usuario:this.user,
    });
  }
   
}
