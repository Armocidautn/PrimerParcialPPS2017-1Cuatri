import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { Resultados } from '../pages/resultados/resultados';
import { Piedrapapeltijera } from '../pages/piedrapapeltijera/piedrapapeltijera';
import { Login } from '../pages/login/login';
import { About } from '../pages/about/about';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoadersCssModule } from 'angular2-loaders-css';
import {AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';


export const firebaseconfig ={

     apiKey: "AIzaSyCoYk986VvNBd7XvaxaVUGV5GZVgD_zI_M",
    authDomain: "piedrapapeltijera-a8449.firebaseapp.com",
    databaseURL: "https://piedrapapeltijera-a8449.firebaseio.com",
    projectId: "piedrapapeltijera-a8449",
    storageBucket: "piedrapapeltijera-a8449.appspot.com",
    messagingSenderId: "676913969149"
  };

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    Login,
    Piedrapapeltijera,
    Resultados,
    About
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    BrowserAnimationsModule,
    LoadersCssModule,
    AngularFireModule.initializeApp(firebaseconfig),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    Login,
    Piedrapapeltijera,
    Resultados,
    About
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
