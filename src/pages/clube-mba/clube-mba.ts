import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetalheEventoPage } from '../detalhe-evento/detalhe-evento';


@Component({
  selector: 'page-clube-mba',
  templateUrl: 'clube-mba.html'
})
export class ClubeMBAPage {

  constructor(public navCtrl: NavController) {
   //  navCtrl.popToRoot();

    
  }
  goToDetalheEvento(params){
    if (!params) params = {};
    this.navCtrl.push(DetalheEventoPage);
  }
}
