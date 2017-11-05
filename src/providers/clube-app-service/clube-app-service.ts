import { Injectable } from '@angular/core';
import { Http ,RequestOptions} from '@angular/http';
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
