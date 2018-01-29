import { Component } from '@angular/core';
import { NavController ,NavParams } from 'ionic-angular';
import { DetalhePerfilPage } from '../detalhe-perfil/detalhe-perfil';
import { ClubeAppServiceProvider } from '../../providers/clube-app-service/clube-app-service';
import {SafeResourceUrl, DomSanitizer} from '@angular/platform-browser';
import { Http, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';

import { HttpModule } from '@angular/http';

@Component({
  selector: 'page-card',
  templateUrl: 'card.html'
})
export class MBACardPage {

  url  ;
 
  constructor(public navCtrl: NavController,public http: Http, public sanitizer: DomSanitizer, public serviceProvider: ClubeAppServiceProvider,public navParams: NavParams)
   {
    
 
  
  }
  rand(){
    return "?rand="+Math.random().toString(36).substring(7);
  }
 
 
}
