import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetalhePerfilPage } from '../detalhe-perfil/detalhe-perfil';
import { ClubeAppServiceProvider } from '../../providers/clube-app-service/clube-app-service';

@Component({
  selector: 'page-networking',
  templateUrl: 'networking.html'
})
export class NetworkingPage {

  users = [];
  constructor(public navCtrl: NavController, public serviceProvider: ClubeAppServiceProvider) {
   this.getUsers();
  }

  getUsers() {
    this.serviceProvider.getUsers()
    .then(data => {
      
      for(var i=0; i<(<string[]>data).length; i++){
        this.users.push((<string[]>data)[i]);
      
      }
      
      //this.users = data ;
      
    });
  }

  goToDetalhePerfil(params){
    if (!params) params = {};
    this.navCtrl.push(DetalhePerfilPage);
  }
}
