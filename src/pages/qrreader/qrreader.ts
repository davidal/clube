import { Component } from '@angular/core';
import { NavController ,NavParams } from 'ionic-angular';
import { DetalhePerfilPage } from '../detalhe-perfil/detalhe-perfil';
import { ClubeAppServiceProvider } from '../../providers/clube-app-service/clube-app-service';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';



@Component({
  selector: 'page-qrreader',
  templateUrl: 'qrreader.html'
})
export class QrReaderPage {

  url  ;
 
  constructor( public navCtrl: NavController,public serviceProvider: ClubeAppServiceProvider,public navParams: NavParams,private qrScanner: QRScanner)
   {
    
this.leCodigo();
  
  }

leCodigo(){

 // Optionally request the permission early
 this.qrScanner.prepare()
 .then((status: QRScannerStatus) => {
    if (status.authorized) {
      // camera permission was granted
 
 
      // start scanning
      let scanSub = this.qrScanner.scan().subscribe((text: string) => {
        console.log('Scanned something', text);
 alert(text);
        this.qrScanner.hide(); // hide camera preview
        scanSub.unsubscribe(); // stop scanning
      });
 
      // show camera preview
      this.qrScanner.show();
 
      // wait for user to scan something, then the observable callback will be called
 
    } else if (status.denied) {
      alert('denied');
      // camera permission was permanently denied
      // you must use QRScanner.openSettings() method to guide the user to the settings page
      // then they can grant the permission from there
    } else {
      alert('denied but not permanent');
      // permission was denied, but not permanently. You can ask for permission again at a later time.
    }
 })
 .catch((e: any) => console.log('Error is', e));
}

  rand(){
    return "?rand="+Math.random().toString(36).substring(7);
  }
 
 
}
