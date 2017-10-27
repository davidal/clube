import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';

@Component({
  selector: 'page-detalhe-evento',
  templateUrl: 'detalhe-evento.html'
})
export class DetalheEventoPage {

  evento: any;
  constructor(public navCtrl: NavController,public navParams: NavParams) {
     console.log('vento',navParams.get('evento'));
    this.evento = navParams.get('evento');
    
  }
  GoToDetails(){

    if(this.evento.LinkDetalhes!= null && this.evento.LinkDetalhes != "")
      window.open(this.evento.LinkDetalhes);

  }
}
