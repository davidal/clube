import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { OMeuPerfilPage } from '../pages/o-meu-perfil/o-meu-perfil';
import { DetalhePerfilPage } from '../pages/detalhe-perfil/detalhe-perfil';
import { ClubeMBAPage } from '../pages/clube-mba/clube-mba';
import { PesquisarPage } from '../pages/pesquisar/pesquisar';
import { LoginPage } from '../pages/login/login';
import { DetalheEventoPage } from '../pages/detalhe-evento/detalhe-evento';
import { RegistarPage } from '../pages/registar/registar';
import { NetworkingPage } from '../pages/networking/networking';
import { IonicStorageModule } from '@ionic/storage';
import { HttpModule } from '@angular/http';

import { File } from '@ionic-native/file';
import { Transfer } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
import { Camera } from '@ionic-native/camera';
import { QRScanner } from '@ionic-native/qr-scanner';
import { PhotoViewer } from '@ionic-native/photo-viewer';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { InAppBrowser } from '@ionic-native/in-app-browser';


//databvase: clubemba_app
//username: clubemba_app
//password: Coimbra2017
//http://clube-mba.pt/app/actions.php?action=GetUtilizadores&pwdWS=pwdClubeMBACoimbra

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ClubeAppServiceProvider } from '../providers/clube-app-service/clube-app-service';
import { GramPage } from '../pages/gram/gram';
import { MBACardPage } from '../pages/card/card';
import { QrReaderPage } from '../pages/qrreader/qrreader';
import { DocumentsPage } from '../pages/documents/documents';

@NgModule({
  declarations: [
    MyApp,
    OMeuPerfilPage,
    DetalhePerfilPage,
    ClubeMBAPage,
    PesquisarPage,
    LoginPage,
    DetalheEventoPage,
    RegistarPage,
    NetworkingPage,
    GramPage,
    MBACardPage,
    QrReaderPage,
    DocumentsPage
  
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot({
      name: 'ClubeMbaDB',
         driverOrder: ['indexeddb', 'sqlite', 'websql']
    }),
    HttpModule,
    NgxQRCodeModule
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    OMeuPerfilPage,
    DetalhePerfilPage,
    ClubeMBAPage,
    PesquisarPage,
    LoginPage,
    DetalheEventoPage,
    RegistarPage,
    NetworkingPage,
    GramPage,
    MBACardPage,
    QrReaderPage,
    DocumentsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ClubeAppServiceProvider,
    File,
    Transfer,
    Camera,
    FilePath,
    QRScanner,
    PhotoViewer,
    BarcodeScanner,
    InAppBrowser
  ]
})
export class AppModule {}