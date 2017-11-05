import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NetworkingPage } from '../networking/networking';
import { DetalhePerfilPage } from '../detalhe-perfil/detalhe-perfil';
import { ClubeAppServiceProvider } from '../../providers/clube-app-service/clube-app-service';

@Component({
  selector: 'page-pesquisar',
  templateUrl: 'pesquisar.html'
})
export class PesquisarPage {
  search={ nome: "" as string, telefone: "" as string, email:"" as string,  curso:"" as string, ano:"", blnOnlyEmails: false, 
  blnOnlyPhone:false 
      };

  constructor(public navCtrl: NavController, public serviceProvider: ClubeAppServiceProvider) {
  
  }
 
  users=null;

  doSearch(){
 

    //constroi SQL -- ksa lixe... 20171030
    var sqlString=" 1 = 1 ";
    if(this.search.nome!="")
      sqlString += " AND Nome like '%"+this.search.nome+"%' ";
    if(this.search.telefone!="")
      sqlString += " AND Telefone like '%"+this.search.telefone+"%' ";
      if(this.search.email!="")
      sqlString += " AND Email like '%"+this.search.email+"%' ";
      if(this.search.curso!="")
      sqlString += " AND c.cursoId="+this.search.curso+" ";
      if(this.search.ano!="")
      sqlString += " AND AnoEntrada="+this.search.ano+" ";
      if(this.search.blnOnlyEmails)
      sqlString += " AND (email is not null AND email <>'') ";
      if(this.search.blnOnlyEmails)
      sqlString += " AND (telefone is not null AND telefone <>'') ";
      

      this.serviceProvider.searchUsers(sqlString)
      .then(data => {
        if (data !=null){
        if((<string[]>data).length>0) this.users=[];

        for(var i=0; i<(<string[]>data).length; i++){
          this.users.push((<string[]>data)[i]);
        
        }
         
        //this.users = data ;
        this.navCtrl.push(NetworkingPage,{users: this.users,pesquisa:'1'});
      }
      else{alert('Não existem resultados.')};
      });
     
    
  }goToDetalhePerfil(params){
    if (!params) params = {};
    this.navCtrl.push(DetalhePerfilPage);
  }
}
