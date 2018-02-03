import { Component } from '@angular/core';
import { NavController ,NavParams} from 'ionic-angular';
import { ClubeAppServiceProvider } from '../../providers/clube-app-service/clube-app-service';
import { PhotoViewer } from '@ionic-native/photo-viewer';
@Component({
  selector: 'page-detalhe-perfil',
  templateUrl: 'detalhe-perfil.html'
})
export class DetalhePerfilPage {

  utilizador: any ={ nome: "" as string, telefone: "" as string, email:"" as string,  curso:"" as string, ano:"", blnOnlyEmails: false, 
  blnOnlyPhone:false 
      };

  constructor(public navCtrl: NavController,public navParams: NavParams, 
    public serviceProvider: ClubeAppServiceProvider,private photoViewer: PhotoViewer) {
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

  showPhoto(){
    console.log("Abrir foto "+this.utilizador.Foto);
    this.photoViewer.show(this.utilizador.Foto);

  }

  rand(){
    return "?rand="+Math.random().toString(36).substring(7);
  }
}
