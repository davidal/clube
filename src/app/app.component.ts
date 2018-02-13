import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { OMeuPerfilPage } from '../pages/o-meu-perfil/o-meu-perfil';
import { RegistarPage } from '../pages/registar/registar';
import { ClubeMBAPage } from '../pages/clube-mba/clube-mba';
import { DetalheEventoPage } from '../pages/detalhe-evento/detalhe-evento';
import { PesquisarPage } from '../pages/pesquisar/pesquisar';
import { DetalhePerfilPage } from '../pages/detalhe-perfil/detalhe-perfil';
import { NetworkingPage } from '../pages/networking/networking';
import { Storage } from '@ionic/storage';
import { MenuController } from 'ionic-angular';

import { LoginPage } from '../pages/login/login';
import { DocumentsPage } from '../pages/documents/documents';
import { GramPage } from '../pages/gram/gram';
import { MBACardPage } from '../pages/card/card';
import { QrReaderPage } from '../pages/qrreader/qrreader';
import { NgxQRCodeModule } from 'ngx-qrcode2';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;


    rootPage:any = LoginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,private storage: Storage,public menuCtrl: MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.

      statusBar.styleDefault();
      splashScreen.hide();


     
        // Or to get a key/value pair
        storage.get('user').then((val) => {
       //  alert(val);
          if(val != null){
            this.navCtrl.setRoot(OMeuPerfilPage,{utilizador:val});
            this.menuCtrl.enable(true, 'menuMBA');
          }
        
          else{
          this.navCtrl.setRoot(LoginPage);
          this.menuCtrl.enable(false, 'menuMBA');  
        }
         
        });


    });
  }
  goToOMeuPerfil(params){
    if (!params) params = {};
    this.navCtrl.setRoot(OMeuPerfilPage);
  }goToLogin(params){
    if (!params) params = {};
    this.navCtrl.setRoot(LoginPage);
  }goToRegistar(params){
    if (!params) params = {};
    this.navCtrl.setRoot(RegistarPage);
  }goToClubeMBA(params){
    if (!params) params = {};
    this.navCtrl.setRoot(ClubeMBAPage);
  }goToDetalheEvento(params){
    if (!params) params = {};
    this.navCtrl.setRoot(DetalheEventoPage);
  }goToPesquisar(params){
    if (!params) params = {};
    this.navCtrl.setRoot(PesquisarPage);
  }goToNetworking(params){
    if (!params) params = {};
    this.navCtrl.setRoot(NetworkingPage);
  }goToDetalhePerfil(params){
    if (!params) params = {};
    this.navCtrl.setRoot(DetalhePerfilPage);
  }
  goToGram(params){
    if (!params) params = {};
    this.navCtrl.setRoot(GramPage);
  }
  goToCard(params){
    if (!params) params = {};
    this.navCtrl.setRoot(MBACardPage);
  }
  goToQrReader(params){
    if (!params) params = {};
    this.navCtrl.setRoot(QrReaderPage);
  }
  goToDocuments(params){
    if (!params) params = {};
    this.navCtrl.setRoot(DocumentsPage);
  }
}
