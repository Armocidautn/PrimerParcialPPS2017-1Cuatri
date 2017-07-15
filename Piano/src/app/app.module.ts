import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { File } from '@ionic-native/file';
import { NativeAudio } from '@ionic-native/native-audio';
import { Vibration } from '@ionic-native/vibration';
import {AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Login } from '../pages/login/login';
import { About } from '../pages/about/about';

import { Secuencia } from '../pages/secuencia/secuencia';
import {AndroidFullScreen } from'@ionic-native/android-full-screen';
export const firebaseconfig ={

   apiKey: "AIzaSyDC27Z_224Qty9GeFhqF58E26xyaY67vdU",
    authDomain: "pianot-73bfc.firebaseapp.com",
    databaseURL: "https://pianot-73bfc.firebaseio.com",
    projectId: "pianot-73bfc",
    storageBucket: "pianot-73bfc.appspot.com",
    messagingSenderId: "213702711547"
  };

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Login,
    Secuencia,
    About
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
    Login,
    Secuencia,
    About
  ],
  providers: [
    StatusBar,
    SplashScreen,
    NativeAudio,
    File,
    Vibration,
    AndroidFullScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
    
  ]
})
export class AppModule {}
