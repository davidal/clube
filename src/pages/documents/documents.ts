import { Component } from '@angular/core';
import { NavController ,NavParams } from 'ionic-angular';
import { DetalhePerfilPage } from '../detalhe-perfil/detalhe-perfil';
import { ClubeAppServiceProvider } from '../../providers/clube-app-service/clube-app-service';
import {SafeResourceUrl, DomSanitizer} from '@angular/platform-browser';
import { Http, Headers, RequestOptions } from '@angular/http';
import { InAppBrowser, InAppBrowserOptions } from "@ionic-native/in-app-browser";

import 'rxjs/add/operator/map';

import { HttpModule } from '@angular/http';

@Component({
  selector: 'page-documents',
  templateUrl: 'documents.html'
})
export class DocumentsPage {

  documentos=  [];
conteudo="Loading...";
  constructor(public navCtrl: NavController,public http: Http, public sanitizer: DomSanitizer, public serviceProvider: ClubeAppServiceProvider,public navParams: NavParams,private inAppBrowser: InAppBrowser)
   {
 

    this.serviceProvider.getDocumentos()
    .then(data => {
      if((<string[]>data).length>0) this.documentos=[];
      for(var i=0; i<(<string[]>data).length; i++){
        this.documentos.push((<string[]>data)[i]);
      }
     
      //this.users = data ;
      
    });

  }
 
  goToDocument(doc)
  {
    const options: InAppBrowserOptions = {
      toolbarposition:'top',
      

      location : 'no',//Or 'no' 
    hidden : 'no', //Or  'yes'
    clearcache : 'yes',
    clearsessioncache : 'yes',
    zoom : 'yes',//Android only ,shows browser zoom controls 
    hardwareback : 'yes',
    mediaPlaybackRequiresUserAction : 'no',
    shouldPauseOnSuspend : 'no', //Android only 
    closebuttoncaption : 'Close', //iOS only
    disallowoverscroll : 'no', //iOS only 
    toolbar : 'yes', //iOS only 
    enableViewportScale : 'yes', //iOS only 
    allowInlineMediaPlayback : 'yes',//iOS only 
    presentationstyle : 'pagesheet',//iOS only 
    fullscreen : 'yes',//Windows only    
    }

      // Opening a URL and returning an InAppBrowserObject
      const browser = this.inAppBrowser.create(doc.Url, '_blank', options);
  
     // Inject scripts, css and more with browser.X
    
  }
}
