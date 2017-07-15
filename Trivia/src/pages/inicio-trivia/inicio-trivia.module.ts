import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InicioTrivia } from './inicio-trivia';

@NgModule({
  declarations: [
    InicioTrivia,
  ],
  imports: [
    IonicPageModule.forChild(InicioTrivia),
  ],
  exports: [
    InicioTrivia
  ]
})
export class InicioTriviaModule {}
