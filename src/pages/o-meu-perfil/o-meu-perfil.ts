import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { RegistarPage } from '../registar/registar';
import { ClubeMBAPage } from '../clube-mba/clube-mba';
import { DetalheEventoPage } from '../detalhe-evento/detalhe-evento';
import { Storage } from '@ionic/storage';
import { MenuController } from 'ionic-angular';

@Component({
  selector: 'page-o-meu-perfil',
  templateUrl: 'o-meu-perfil.html'
})
export class OMeuPerfilPage {

  constructor(public navCtrl: NavController,public menuCtrl: MenuController,public storage:Storage) {
  }

logout(){

  this.storage.clear().then(() => {
    this.navCtrl.setRoot(LoginPage);
  });
 //
}

  goToLogin(params){
    if (!params) params = {};
    this.navCtrl.push(LoginPage);
  }goToRegistar(params){
    if (!params) params = {};
    this.navCtrl.push(RegistarPage);
  }goToDetalheEvento(params){
    if (!params) params = {};
    this.navCtrl.push(DetalheEventoPage);
  }goToClubeMBA(params){
    if (!params) params = {};
    this.navCtrl.push(ClubeMBAPage);
  }
}
