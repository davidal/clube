import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { InAppBrowser, InAppBrowserOptions } from "@ionic-native/in-app-browser";
@Component({
  selector: 'page-detalhe-evento',
  templateUrl: 'detalhe-evento.html'
})
export class DetalheEventoPage {

  evento: any;
  constructor(public navCtrl: NavController,public navParams: NavParams,private inAppBrowser: InAppBrowser) {
   //  console.log('vento',navParams.get('evento'));
    this.evento = navParams.get('evento');
    
  }
  GoToDetails(evento){

    // if(this.evento.LinkDetalhes!= null && this.evento.LinkDetalhes != "")
    //   window.open(this.evento.LinkDetalhes);

 
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
      const browser = this.inAppBrowser.create(evento.LinkDetalhes, '_blank', options);
  
     // Inject scripts, css and more with browser.X
    
 

  }
}
