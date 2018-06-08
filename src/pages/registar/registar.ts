import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ClubeMBAPage } from '../clube-mba/clube-mba';
import { MenuController } from 'ionic-angular';
import { ClubeAppServiceProvider } from '../../providers/clube-app-service/clube-app-service';
import { Storage } from '@ionic/storage';
import { ToastController } from 'ionic-angular';
import { LoginPage } from '../login/login';


@Component({
  selector: 'page-registar',
  templateUrl: 'registar.html'
})
export class RegistarPage {
  utilizador: any ={ UtilizadorId: "" as string, Nome: "" as string, Telefone: "" as string, Email:"" as string,  Curso:"" as string, Ano:"", blnOnlyEmails: false, 
  blnOnlyPhone:false , Foto:"" as string, TipoId: -1, SetorId: -1, Gdpr:0 , Password:"" as string, Password2:"" as string
      };

      autoCode: any ="";

      setores: any = [];

  constructor(public navCtrl: NavController,public storage:Storage
    , public serviceProvider: ClubeAppServiceProvider,public menuCtrl: MenuController, private toastCtrl: ToastController) {
    
      this.serviceProvider.getSetores()
      .then(data => {
        if((<string[]>data).length>0) this.setores=[];
        for(var i=0; i<(<string[]>data).length; i++){
          this.setores.push((<string[]>data)[i]);
        }
       
        //this.users = data ;
        
      });


      this.serviceProvider.GetAutoCode()
      .then(data => {
        this.autoCode = data;
        console.log(data);
      });


  }

  public presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'top'
    });
  
    toast.onDidDismiss(() => {
     // console.log('Dismissed toast');
    });
  
    toast.present();
  }

  public saveProfile(){

        console.log(this.utilizador);
     this.serviceProvider.insertUsers(this.utilizador).then((msg) => {
      this.presentToast(msg);
    });

      if(this.utilizador.AutoCode==this.autoCode)
      {
        this.storage.set('user',  this.utilizador).then(() => {
          this.menuCtrl.enable(true, 'menuMBA');
          this.navCtrl.setRoot(ClubeMBAPage, {utilizador:this.utilizador});
        });
      } 
      else
      {
        this.navCtrl.setRoot(LoginPage);
      }

    }

  

  goToClubeMBA(params){
    if (!params) params = {};
    this.navCtrl.push(ClubeMBAPage);
  } 
}
