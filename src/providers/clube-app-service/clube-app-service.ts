import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


/*
  Generated class for the ClubeAppServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ClubeAppServiceProvider {

  getApiUrl : string = "http://clube-mba.pt/app/actions.php?pwdWS=pwdClubeMBACoimbra&action=";

  public Logo: string = "assets/img/logo.png";
  
  constructor(public http: Http) {
   // console.log('Hello ClubeAppServiceProvider Provider');
  }

  getUsers() {
    return new Promise(resolve => {
      this.http.get(this.getApiUrl+"GetUtilizadores")
      .map(res =>  res.json())
      .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
  
  getSetores() {
    return new Promise(resolve => {
      this.http.get(this.getApiUrl+"GetSetores")
      .map(res =>  res.json())
      .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
  
  getDocumentos() {
    return new Promise(resolve => {
      this.http.get(this.getApiUrl+"GetDocumentos")
      .map(res =>  res.json())
      .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
  

  GetParcerias() {
    return new Promise(resolve => {
      this.http.get(this.getApiUrl+"GetParcerias")
      .map(res =>  res.json())
      .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  GetAppConfig() {
    return new Promise(resolve => {
      this.http.get(this.getApiUrl+"GetAppConfig")
      .map(res =>  res.json())
      .subscribe(data => {
        resolve(data);
       
        if (data != null && ( < string[] > data).length == 1) {
         
          var dadosConfig: any = < string[] > data[0];
          console.log(dadosConfig);
          if (dadosConfig != null && dadosConfig.Logo != null && dadosConfig.Logo != "") {
              this.Logo = dadosConfig.Logo;
              alert(data); 
          }

        }
        
      }, err => {
        console.log(err);
      });
    });
  }

searchUsers(filter) {
 
  return new Promise((resolve, reject) => {
    this.http.post(this.getApiUrl+'GetUtilizadores', filter)
    .map(res => res.json())
      .subscribe(res => {
        resolve(res);

      }, (err) => {
        reject(err);
      });
  });
  }

  updateUsers(utililizador) {
    let utilizadorString:string;
    utilizadorString= JSON.stringify(utililizador);
    return new Promise((resolve, reject) => {
     
      this.http.post(this.getApiUrl+'UpdateUtilizador', utilizadorString)
      .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
    }

   insertUsers(utililizador) {
      let utilizadorString:string;
      utilizadorString= JSON.stringify(utililizador);
      return new Promise((resolve, reject) => {
       
        this.http.post(this.getApiUrl+'InsertUtilizador', utilizadorString)
        .map(res => res.json())
          .subscribe(res => {
            resolve(res); 
          }, (err) => {
            reject(err);
          });
      });
      }


  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const err = error || '';
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

  getClubeInfo() {
    return new Promise(resolve => {
      this.http.get(this.getApiUrl+"GetClubeInfo")
      .map(res => res.json())
      .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }


}
