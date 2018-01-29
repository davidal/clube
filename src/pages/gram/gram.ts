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
   this.url=sanitizer.bypassSecurityTrustResourceUrl("https://www.instagram.com/explore/tags/coimbra/");


    let proxyurl = "https://cors-anywhere.herokuapp.com/";
this.url = this.http
  .get( 'https://www.instagram.com/explore/tags/coimbra/')
  .map(response => response.text())
  .subscribe(
    function (data) {
      //this.conteudo= (data);
      alert(this.conteudo);
      document.getElementById("teste").innerHTML=(data);
    }
);

  
  }

 
 
}
