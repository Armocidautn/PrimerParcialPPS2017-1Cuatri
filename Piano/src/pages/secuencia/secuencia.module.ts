import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Secuencia } from './secuencia';

@NgModule({
  declarations: [
    Secuencia,
  ],
  imports: [
    IonicPageModule.forChild(Secuencia),
  ],
  exports: [
    Secuencia
  ]
})
export class SecuenciaModule {}
