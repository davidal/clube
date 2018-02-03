import { Component } from '@angular/core';
import { NavController ,NavParams } from 'ionic-angular';
import { DetalhePerfilPage } from '../detalhe-perfil/detalhe-perfil';
import { ClubeAppServiceProvider } from '../../providers/clube-app-service/clube-app-service';
import {SafeResourceUrl, DomSanitizer} from '@angular/platform-browser';
import { Http, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';

import { HttpModule } from '@angular/http';

@Component({
  selector: 'page-gram',
  templateUrl: 'gram.html'
})
export class GramPage {

  url  ;
conteudo="Loading...";
  constructor(public navCtrl: NavController,public http: Http, public sanitizer: DomSanitizer, public serviceProvider: ClubeAppServiceProvider,public navParams: NavParams)
   {
 
  }
 
 
}
