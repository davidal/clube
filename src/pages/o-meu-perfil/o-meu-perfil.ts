import { Component } from '@angular/core';
import { NavController , NavParams} from 'ionic-angular';
import { LoginPage } from '../login/login';
import { RegistarPage } from '../registar/registar';
import { ClubeMBAPage } from '../clube-mba/clube-mba';
import { DetalheEventoPage } from '../detalhe-evento/detalhe-evento';
import { Storage } from '@ionic/storage';
import { MenuController } from 'ionic-angular';
import { ClubeAppServiceProvider } from '../../providers/clube-app-service/clube-app-service';
import {    ActionSheetController, ToastController, Platform, LoadingController, Loading } from 'ionic-angular';
 
import { File } from '@ionic-native/file';
import { Transfer, TransferObject } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
import { Camera } from '@ionic-native/camera';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';


declare var cordova: any;


@Component({
  selector: 'page-o-meu-perfil',
  templateUrl: 'o-meu-perfil.html'
})
export class OMeuPerfilPage {
  setores: any = [];
  
  qrData = null;
  createdCode = null;
  scannedCode = null;

  loading: Loading;
  utilizador: any ={ UtilizadorId: "" as string, Nome: "" as string, Telefone: "" as string, Email:"" as string,  Curso:"" as string, Ano:"", blnOnlyEmails: false, 
  blnOnlyPhone:false , Foto:"" as string, TipoId: -1, SetorId: -1
      };
  constructor(public navCtrl: NavController,public menuCtrl: MenuController,public storage:Storage, private camera: Camera, private transfer: Transfer,
     private file: File, private filePath: FilePath, public actionSheetCtrl: ActionSheetController, public toastCtrl: ToastController, public platform: Platform,
      public loadingCtrl: LoadingController,public navParams: NavParams,
       public serviceProvider: ClubeAppServiceProvider, private barcodeScanner: BarcodeScanner) { 
    
    this.serviceProvider.getSetores()
    .then(data => {
      if((<string[]>data).length>0) this.setores=[];
      for(var i=0; i<(<string[]>data).length; i++){
        this.setores.push((<string[]>data)[i]);
      }
     
      //this.users = data ;
      
    });
    if( navParams.get('utilizador') == null)
    {
      
      storage.get('user').then((val) => {
        //  alert(val);
        
           if(val != null){
              this.utilizador=val;
             console.log('utilizador',this.utilizador);
           }
         
           else{
            this.logout();
          }
          
         });
    }
    else
      this.utilizador = navParams.get('utilizador');
   // console.log('perfil',this.utilizador);

   this.qrData = "ClubeMBA#"+this.utilizador.UtilizadorId;
  this.createCode();
  }

  
public presentActionSheet() {
  let actionSheet = this.actionSheetCtrl.create({
    title: 'Select Image Source',
    buttons: [
      {
        text: 'Load from Library',
        handler: () => {
          this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
        }
      },
      {
        text: 'Use Camera',
        handler: () => {
          this.takePicture(this.camera.PictureSourceType.CAMERA);
        }
      },
      {
        text: 'Cancel',
        role: 'cancel'
      }
    ]
  });
  actionSheet.present();
}

public takePicture(sourceType) {
  // Create options for the Camera Dialog
  var options = {
    quality: 100,
    sourceType: sourceType,
    saveToPhotoAlbum: false,
    correctOrientation: true
  };
 
  // Get the data of an image
  this.camera.getPicture(options).then((imagePath) => {
    // Special handling for Android library
    if (this.platform.is('android') && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) {
      this.filePath.resolveNativePath(imagePath)
        .then(filePath => {
          let correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
          let currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
         // this.lastImage=this.utilizador.UtilizadorId+".png";
          this.uploadImage(correctPath,currentName);
          //this.copyFileToLocalDir(correctPath, currentName, this.utilizador.UtilizadorId+".png");
        });
    } else {
      
      var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
      var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);

     // this.lastImage=this.utilizador.UtilizadorId+".png";
      this.uploadImage(correctPath,currentName);

     //this.copyFileToLocalDir(correctPath, currentName, this.utilizador.UtilizadorId+".png");
    }
  }, (err) => {
    this.presentToast('Error while selecting image.');
  });
}

 
private presentToast(text) {
  let toast = this.toastCtrl.create({
    message: text,
    duration: 3000,
    position: 'top'
  });
  toast.present();
}
 
// Always get the accurate path to your apps folder
public pathForImage(img) {
  if (img === null) {
    return '';
  } else {
    return cordova.file.dataDirectory + img;
  }
}


createCode() {
  this.createdCode = this.qrData;
}

scanCode() {
  this.barcodeScanner.scan().then(barcodeData => {
    this.scannedCode = barcodeData.text;
  }, (err) => {
      console.log('Error: ', err);
  });
}


public uploadImage(correctPath,currentName) {
  // Destination URL
  var url = "http://clube-mba.pt/app/actions.php?pwdWS=pwdClubeMBACoimbra&action=UploadUserPhoto&UtilizadorId="+this.utilizador.UtilizadorId;
 
  // File for Upload
  var targetPath = "";//this.pathForImage(this.lastImage);
  try {
      targetPath = correctPath + currentName ;//this.pathForImage(this.lastImage);
  } catch (error) {
      targetPath = "/Users/diogorodrigues/GitHub/clube/src/assets/img/diogo.png";//this.pathForImage(this.lastImage);
  }

   console.log("File: "+targetPath);
  // File name only
  var filename = currentName;
 
  var options = {
    fileKey: "file",
    fileName: currentName,
    chunkedMode: false,
    mimeType: "multipart/form-data",
    params : {'fileName': currentName, 'UtilizadorId':this.utilizador.UtilizadorId}
  };
 
  const fileTransfer: TransferObject = this.transfer.create();
 
  this.loading = this.loadingCtrl.create({
    content: 'Uploading...',
  });
  this.loading.present();
 
  // Use the FileTransfer to upload the image
  fileTransfer.upload(targetPath, url, options).then(data => {
    this.loading.dismissAll()
    this.presentToast('Image succesful uploaded.');
    this.utilizador.Foto="http://clube-mba.pt/app/fotos/" + this.utilizador.UtilizadorId+".png";

    console.log(this.utilizador);
    this.storage.set('user',  this.utilizador);
  }, err => {
    this.loading.dismissAll()
    this.presentToast('Error while uploading file.');
  });
}


public saveProfile(){

  //   console.log(this.utilizador);
   this.serviceProvider.updateUsers(this.utilizador);
   this.storage.set('user',  this.utilizador);
 //
}

public logout(){

  this.storage.clear().then(() => {
    this.navCtrl.setRoot(LoginPage);
  });
 //
}

  goToLogin(params){
    if (!params) params = {};
    this.navCtrl.push(LoginPage);
  }goToRegistar(params){
    if (!params) params = {};
    this.navCtrl.push(RegistarPage);
  }goToDetalheEvento(params){
    if (!params) params = {};
    this.navCtrl.push(DetalheEventoPage);
  }goToClubeMBA(params){
    if (!params) params = {};
    this.navCtrl.push(ClubeMBAPage);
  }

  rand(){
    return "?rand="+Math.random().toString(36).substring(7);
  }
}
