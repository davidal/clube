import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetalhePerfilPage } from '../detalhe-perfil/detalhe-perfil';

@Component({
  selector: 'page-networking',
  templateUrl: 'networking.html'
})
export class NetworkingPage {

  constructor(public navCtrl: NavController) {
  }
  goToDetalhePerfil(params){
    if (!params) params = {};
    this.navCtrl.push(DetalhePerfilPage);
  }
}
