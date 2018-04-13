import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetalheEventoPage } from '../detalhe-evento/detalhe-evento';
import { DetalhePerfilPage } from '../detalhe-perfil/detalhe-perfil';
import { ClubeAppServiceProvider } from '../../providers/clube-app-service/clube-app-service';
import { NavParams } from 'ionic-angular';
import { CydServiceProvider } from '../../providers/clube-app-service/cyd.service';
import { MyApp } from '../../app/app.component';
@Component({
  selector: 'page-clube-mba',
  templateUrl: 'clube-mba.html',
  providers:[ ClubeAppServiceProvider, CydServiceProvider]

})
export class ClubeMBAPage {

  arrNoticias:any=[];
  clubeData:any={Eventos:[], Descricao_text:"", Equipa:[], Noticias:this.arrNoticias};
  Logo:string="";
 
  
  constructor(public navCtrl: NavController, public serviceProvider: ClubeAppServiceProvider,public navParams: NavParams,public cydService: CydServiceProvider) {
   //  navCtrl.popToRoot();
   this.clubeData.Eventos=[];
   this.clubeData.Descricao_text="";
   this.clubeData.Equipa=[];
   this.clubeData.Noticias={artigos:[]};
   this.clubeData.Noticias.artigos=[];
   this.Logo = serviceProvider.Logo;
   this.getClubeInfo();
   
    
  }

  getClubeInfo() {

    this.clubeData.Noticias={artigos:[]};
    this.clubeData.Noticias.artigos=[];

    this.serviceProvider.getClubeInfo()
    .then(data => {

        this.clubeData=data;
       

        this.cydService.GetNoticias()
        .then(data2 => {
 
            this.arrNoticias=data2["artigos"];
           console.log(this.arrNoticias);
        });

    // console.log(this.clubeData);
    });
  }

  goToDetalheEvento(params){
    if (!params) params = {};
    
    this.navCtrl.push(DetalheEventoPage,  {  evento: params });
  }

  goToDetalheUtilizador(params){
    if (!params) params = {};
    console.log('userClube',params);
    this.navCtrl.push(DetalhePerfilPage, {  utilizador: params });
    
  }

}
