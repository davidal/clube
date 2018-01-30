import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegistarPage } from '../registar/registar';
import { ClubeMBAPage } from '../clube-mba/clube-mba';
import { DetalheEventoPage } from '../detalhe-evento/detalhe-evento';

import { MenuController } from 'ionic-angular';
import { ClubeAppServiceProvider } from '../../providers/clube-app-service/clube-app-service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  UserLogin="davidal@gmail.com";
  UserPassword="di";
  utilizador:any;
  constructor(public navCtrl: NavController,public storage:Storage,public menuCtrl: MenuController
    , public serviceProvider: ClubeAppServiceProvider) {
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
    var sqlString = " IsValid=1 AND Email = '"+this.UserLogin.replace("'","''")+"' and Password = '"+this.UserPassword.replace("'","''")+"' ";
    
   this.serviceProvider.searchUsers(sqlString)
   .then(data => {
   
    if (data !=null){
      console.log(data);
      if((<string[]>data).length>0) this.utilizador=[];
      
        this.utilizador = ((<string[]>data)[0]);  
  var userIdFromService = this.utilizador.UtilizadorId; //aqui temos q ler da BD

      this.storage.set('user',  this.utilizador).then(() => {
        this.menuCtrl.enable(true, 'menuMBA');
        this.navCtrl.setRoot(ClubeMBAPage, {utilizador:this.utilizador});
      });
      


}  else{
  
        this.menuCtrl.enable(false, 'menuMBA');
        
        alert("Credenciais Inválidas!");
      } });
  
      

  
  }
}

