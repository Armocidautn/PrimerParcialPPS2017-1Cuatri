import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import {AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Resultados } from '../pages/resultados/resultados';
import { ListPage } from '../pages/list/list';
import { Login } from '../pages/login/login';
import { InicioTrivia } from '../pages/inicio-trivia/inicio-trivia';
import { About } from '../pages/about/about';
import { StatusBar } from '@ionic-native/status-bar';
import { NativeAudio } from '@ionic-native/native-audio';
import { Vibration } from '@ionic-native/vibration';
import { SplashScreen } from '@ionic-native/splash-screen';

export const firebaseconfig ={

    apiKey: "AIzaSyCPtrX9EWMDeDeW7oB7sAtLec9PP5YX8rQ",
    authDomain: "trivia-f752c.firebaseapp.com",
    databaseURL: "https://trivia-f752c.firebaseio.com",
    projectId: "trivia-f752c",
    storageBucket: "trivia-f752c.appspot.com",
    messagingSenderId: "364121699803"
  };



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    Login,
    About,
    InicioTrivia,
    Resultados
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseconfig),
    AngularFireDatabaseModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    Login,
    About,
    InicioTrivia,
    Resultados
  ],
  providers: [
    StatusBar,
    SplashScreen,
    NativeAudio,
    Vibration,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
