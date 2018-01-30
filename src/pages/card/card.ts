import { Component } from '@angular/core';
import { NavController ,NavParams } from 'ionic-angular';
import { DetalhePerfilPage } from '../detalhe-perfil/detalhe-perfil';
import { ClubeAppServiceProvider } from '../../providers/clube-app-service/clube-app-service';
import {SafeResourceUrl, DomSanitizer} from '@angular/platform-browser';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';

import { HttpModule } from '@angular/http';

@Component({
  selector: 'page-card',
  templateUrl: 'card.html'
})
export class MBACardPage {

 
 
  utilizador: any ={ UtilizadorId: "" as string, Nome: "" as string, Telefone: "" as string, Email:"" as string,  Curso:"" as string, Ano:"", blnOnlyEmails: false, 
  blnOnlyPhone:false , Foto:"" as string
      };

  constructor(public navCtrl: NavController,public storage:Storage, public http: Http, public sanitizer: DomSanitizer, public serviceProvider: ClubeAppServiceProvider,public navParams: NavParams)
   {
    
    storage.get('user').then((val) => {
      //  alert(val);
      
         if(val != null){
            this.utilizador=val;
           console.log('utilizador',this.utilizador);
         }
       
         else{
         
        }
        
       });
  
  }
  rand(){
    return "?rand="+Math.random().toString(36).substring(7);
  }
 
 
}
