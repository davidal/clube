import { Component } from '@angular/core';
import { NavController ,NavParams} from 'ionic-angular';
import { ClubeAppServiceProvider } from '../../providers/clube-app-service/clube-app-service';
import { PhotoViewer } from '@ionic-native/photo-viewer';
@Component({
  selector: 'page-detalhe-perfil',
  templateUrl: 'detalhe-perfil.html'
})
export class DetalhePerfilPage {

  qrData = null;
  createdCode = null;
  scannedCode = null;

 
      utilizador: any ={ UtilizadorId: "" as string, Nome: "" as string, Telefone: "" as string, Email:"" as string,  Curso:"" as string, Ano:"", blnOnlyEmails: false, 
      blnOnlyPhone:false , Foto:"" as string,TipoId: -1, SetorId: -1
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

  this.qrData = "ClubeMBA#"+this.utilizador.UtilizadorId;
  this.createCode();
  
  }

  createCode() {
    this.createdCode = this.qrData;
  }

  showPhoto(){
    console.log("Abrir foto "+this.utilizador.Foto);
    this.photoViewer.show(this.utilizador.Foto);

  }

  rand(){
    return "?rand="+Math.random().toString(36).substring(7);
  }
}
