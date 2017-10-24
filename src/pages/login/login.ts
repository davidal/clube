import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegistarPage } from '../registar/registar';
import { ClubeMBAPage } from '../clube-mba/clube-mba';
import { DetalheEventoPage } from '../detalhe-evento/detalhe-evento';
import { Storage } from '@ionic/storage';
import { MenuController } from 'ionic-angular';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  UserLogin="";
  UserPassword="";
  constructor(public navCtrl: NavController,public storage:Storage,public menuCtrl: MenuController) {
  }
  goToRegistar(params){
    if (!params) params = {};
    this.navCtrl.push(RegistarPage);
  }goToDetalheEvento(params){
    if (!params) params = {};
    this.navCtrl.push(DetalheEventoPage);
  }goToClubeMBA(params){
    if (!params) params = {};
    this.navCtrl.push(ClubeMBAPage);
  }

  doLogin(params){
    if (!params) params = {};

    if(this.UserLogin == "diogo" && this.UserPassword=="di"){

      var userIdFromService = "1"; //aqui temos q ler da BD

      this.storage.set('userId', userIdFromService).then(() => {
        this.menuCtrl.enable(true, 'menuMBA');
        this.navCtrl.setRoot(ClubeMBAPage);
      });
      
      

    }
    else{

      this.menuCtrl.enable(false, 'menuMBA');
      
      alert("Credenciais Inválidas!");
    }
  }
}
