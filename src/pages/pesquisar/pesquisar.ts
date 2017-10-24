import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NetworkingPage } from '../networking/networking';
import { DetalhePerfilPage } from '../detalhe-perfil/detalhe-perfil';

@Component({
  selector: 'page-pesquisar',
  templateUrl: 'pesquisar.html'
})
export class PesquisarPage {

  constructor(public navCtrl: NavController) {
  }
  goToNetworking(params){
    if (!params) params = {};
    this.navCtrl.push(NetworkingPage);
  }goToDetalhePerfil(params){
    if (!params) params = {};
    this.navCtrl.push(DetalhePerfilPage);
  }
}
