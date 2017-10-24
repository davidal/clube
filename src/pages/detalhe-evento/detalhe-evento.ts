import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';

@Component({
  selector: 'page-detalhe-evento',
  templateUrl: 'detalhe-evento.html'
})
export class DetalheEventoPage {

  constructor(public navCtrl: NavController,public navParams: NavParams) {
    //console.log('vento',navParams);
    alert(navParams.get('eventoId'));
    
  }
  
}
