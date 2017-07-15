import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Piedrapapeltijera } from './piedrapapeltijera';

@NgModule({
  declarations: [
    Piedrapapeltijera,
  ],
  imports: [
    IonicPageModule.forChild(Piedrapapeltijera),
  ],
  exports: [
    Piedrapapeltijera
  ]
})
export class PiedrapapeltijeraModule {}
