import { Component } from '@angular/core';
import { NavController ,NavParams} from 'ionic-angular';
import { ClubeAppServiceProvider } from '../../providers/clube-app-service/clube-app-service';

@Component({
  selector: 'page-detalhe-perfil',
  templateUrl: 'detalhe-perfil.html'
})
export class DetalhePerfilPage {

  utilizador: any ={ nome: "" as string, telefone: "" as string, email:"" as string,  curso:"" as string, ano:"", blnOnlyEmails: false, 
  blnOnlyPhone:false 
      };

  constructor(public navCtrl: NavController,public navParams: NavParams, public serviceProvider: ClubeAppServiceProvider) {
    this.utilizador = navParams.get('utilizador');
   console.log('user',this.utilizador);

/* 
    this.serviceProvider.searchUsers("UtilizadorId = "+utilizadorId)
    .then(data => {
      if (data !=null){
        if((<string[]>data).length>0) this.utilizador=[];
        else this.utilizador.push((<string[]>data)[0]);
      
  
  } });
  */
  }

  rand(){
    return "?rand="+Math.random().toString(36).substring(7);
  }
}
