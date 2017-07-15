import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {trigger,state,style,transition,animate,keyframes} from '@angular/animations';
import { Resultados } from '../../pages/resultados/resultados';

/**
 * Generated class for the Piedrapapeltijera page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-piedrapapeltijera',
  templateUrl: 'piedrapapeltijera.html',
animations: [
  trigger('flyInOut', [
    state('in', style({opacity:'1',height:'*' })),
      state('out', style({opacity:'0',height:'0px'})),
    transition('in => out', [
      animate(2000)
    ]),
    transition('out => in', [
      animate(2000)
    ])
  ])
]
})
export class Piedrapapeltijera {
     maquina:any;
     mostrarLoading:boolean;
     state: any='in';
     gano:any;
     perdio:any;
     ronda:any;
     user:any; 
  constructor(public navCtrl: NavController, public navParams: NavParams) {
     this.user=this.navParams.get('usuario');
     console.log(this.user);
     this.mostrarLoading=false;  
     

 }


     
     md(r){
      
       this.maquina=Math.floor(Math.random()*3);
         
            setTimeout(() => {
               this.mostrarLoading=true;
  }, 2000);

     console.log(this.maquina);
            setTimeout(() => {
               this.navCtrl.setRoot(Resultados,{
                numMaquina:this.maquina,
              eleccionUsuario:r,
              usuario:this.user
  });
  }, 5000);
        
    }

   eleccion(r){

     if(r==0){
     console.log("ANIMACION");
     this.state=(this.state === 'out' ? 'in' : 'out');
     this.md(r);
  }
    if(r==1){
     console.log("ANIMACION");
     this.state=(this.state === 'out' ? 'in' : 'out');
     this.md(r);
     
  }
    if(r==2){
     console.log("ANIMACION");
     this.state=(this.state === 'out' ? 'in' : 'out');
     this.md(r);
  }
     
}
    
  ionViewDidLoad() {
    console.log('ionViewDidLoad Piedrapapeltijera');
  }

}
