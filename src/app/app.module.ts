import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { MyApp } from './app.component';
import { AddLocationPage } from '../pages/addlocation/addlocation';
import { ShoppingListService2 } from './../services/shopping-list/shopping-list2.service';
//import * as firebase from 'firebase';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';
import { CurrInvReportPage } from '../pages/currinvreport/currinvreport';
import { POReportPage } from '../pages/poreport/poreport';
import { HomeaddPage } from '../pages/homeadd/homeadd';
import { ReviewcartPage } from '../pages/reviewcart/reviewcart';
import { EditcartPage } from '../pages/editcart/editcart';
import { ResetpwdPage } from '../pages/resetpwd/resetpwd';
//import { LoginPage } from '../pages/login/login';
import { IrreportsPage } from '../pages/irreports/irreports';
import { InventoryPage } from '../pages/inventory/inventory';
import { FIREBASE_CONFIG } from './firebase.credentials';
import { ShoppingListService } from './../services/shopping-list/shopping-list.service';
import { ToastService } from './../services/toast/toast.service';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { SuperTabsModule } from 'ionic2-super-tabs';
import { HttpModule } from '@angular/http';
import { DataServiceProvider } from '../providers/data-service/data-service';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    HomeaddPage,
    TabsPage,
    IrreportsPage,
    InventoryPage,
    AddLocationPage,
    CurrInvReportPage,
    POReportPage,
    ResetpwdPage,
    ReviewcartPage,
    EditcartPage
//   LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
SuperTabsModule.forRoot(),
 HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    HomeaddPage,
    TabsPage,
    IrreportsPage,
    InventoryPage,
    AddLocationPage,
    CurrInvReportPage,
    POReportPage,
    ResetpwdPage,
    ReviewcartPage,
    EditcartPage
//LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ShoppingListService,
    ShoppingListService2,
    ToastService,
    SuperTabsModule,
    BarcodeScanner,
    DataServiceProvider
  ]
})
export class AppModule {}
