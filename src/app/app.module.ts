import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SensePage } from '../pages/sense/sense';
import { GrooversPage } from '../pages/groovers/groovers';
import { RecordPage } from '../pages/record/record';
import { DeckPage } from '../pages/deck/deck';
import { SetPage } from '../pages/set/set';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { SettingPage } from '../pages/setting/setting';
import { Reg1Page } from '../pages/reg1/reg1';
import { Reg2Page } from '../pages/reg2/reg2';




@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    SensePage,
    GrooversPage,
    RecordPage,
    DeckPage,
    SetPage,
    LoginPage,
    RegisterPage,
    SettingPage,
    Reg1Page,
    Reg2Page
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    SensePage,
    GrooversPage,
    RecordPage,
    DeckPage,
    SetPage,
    LoginPage,
    RegisterPage,
    SettingPage,
    Reg1Page,
    Reg2Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
