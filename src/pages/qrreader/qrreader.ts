import { Component } from '@angular/core';
import { NavController ,NavParams } from 'ionic-angular';
import { DetalhePerfilPage } from '../detalhe-perfil/detalhe-perfil';
import { ClubeAppServiceProvider } from '../../providers/clube-app-service/clube-app-service';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';


@Component({
  selector: 'page-qrreader',
  templateUrl: 'qrreader.html'
})
export class QrReaderPage {

 
  qrData = null;
  createdCode = null;
  scannedCode = null;
 
  constructor( public navCtrl: NavController,public serviceProvider: ClubeAppServiceProvider,public navParams: NavParams,private qrScanner: QRScanner, private barcodeScanner: BarcodeScanner)
   {
    
    this.scanCode();
  
  }

  scanCode() {
    this.barcodeScanner.scan().then(barcodeData => {
      this.scannedCode = barcodeData.text;
 
          if(this.scannedCode != null && this.scannedCode !=""){

            this.scannedCode= this.scannedCode.replace("ClubeMBA#","");
            this.serviceProvider.searchUsers("UtilizadorId = "+this.scannedCode )
    .then(data => {
      if (data !=null){
      
        this.navCtrl.push(DetalhePerfilPage, {  utilizador: (<string[]>data)[0]  });

              
                  
                  //this.users = data ;
                  
                }});
              }

    }, (err) => {
        console.log('Error: ', err);
    });
  }

   
 
}
