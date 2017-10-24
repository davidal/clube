import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ClubeAppServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ClubeAppServiceProvider {

  getApiUrl : string = "http://clube-mba.pt/app/actions.php?pwdWS=pwdClubeMBACoimbra&action=";

  
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
