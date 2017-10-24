import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetalheEventoPage } from '../detalhe-evento/detalhe-evento';
import { DetalhePerfilPage } from '../detalhe-perfil/detalhe-perfil';
import { ClubeAppServiceProvider } from '../../providers/clube-app-service/clube-app-service';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'page-clube-mba',
  templateUrl: 'clube-mba.html'
})
export class ClubeMBAPage {

  clubeData:any={};
  
  constructor(public navCtrl: NavController, public serviceProvider: ClubeAppServiceProvider,public navParams: NavParams) {
   //  navCtrl.popToRoot();
   this.clubeData.Eventos=[];
   this.clubeData.Descricao_text="";
   this.clubeData.Equipa=[];
 
   this.getClubeInfo();
    
  }

  getClubeInfo() {
    this.serviceProvider.getClubeInfo()
    .then(data => {

        this.clubeData=data;
      
      console.log(this.clubeData);
    });
  }

  goToDetalheEvento(params){
    if (!params) params = {};
    
    this.navCtrl.push(DetalheEventoPage, params);
  }

  goToDetalheUtilizador(params){
    if (!params) params = {};
    
    this.navCtrl.push(DetalhePerfilPage,params);
  }

}
