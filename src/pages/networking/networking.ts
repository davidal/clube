import { Component } from '@angular/core';
import { NavController ,NavParams } from 'ionic-angular';
import { DetalhePerfilPage } from '../detalhe-perfil/detalhe-perfil';
import { ClubeAppServiceProvider } from '../../providers/clube-app-service/clube-app-service';

@Component({
  selector: 'page-networking',
  templateUrl: 'networking.html'
})
export class NetworkingPage {

  users =[] ;

  constructor(public navCtrl: NavController, public serviceProvider: ClubeAppServiceProvider,public navParams: NavParams) {

    console.log('users',this.users);
    if(navParams.get('pesquisa') == '1')
 {     
   var data = navParams.get('users');
   this.users =[] ;
 for(var i=0; i<(<string[]>data).length; i++){
  this.users.push((<string[]>data)[i]);
}

}
    else
      this.getUsers();

      console.log(this.users);
  }

  getUsers() {
    this.serviceProvider.getUsers()
    .then(data => {
      if((<string[]>data).length>0) this.users=[];
      for(var i=0; i<(<string[]>data).length; i++){
        this.users.push((<string[]>data)[i]);
      }
      
      //this.users = data ;
      
    });
  }

  goToDetalhePerfil(params){
    if (!params) params = {};
    console.log(params);
    this.navCtrl.push(DetalhePerfilPage, {  utilizador: params });

 

  }
}
