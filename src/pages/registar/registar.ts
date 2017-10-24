import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ClubeMBAPage } from '../clube-mba/clube-mba';
import { DetalheEventoPage } from '../detalhe-evento/detalhe-evento';
import { DetalheEventoPage } from '../detalhe-evento/detalhe-evento';
import { DetalheEventoPage } from '../detalhe-evento/detalhe-evento';

@Component({
  selector: 'page-registar',
  templateUrl: 'registar.html'
})
export class RegistarPage {

  constructor(public navCtrl: NavController) {
  }
  goToClubeMBA(params){
    if (!params) params = {};
    this.navCtrl.push(ClubeMBAPage);
  }goToDetalheEvento(params){
    if (!params) params = {};
    this.navCtrl.push(DetalheEventoPage);
  }
}
