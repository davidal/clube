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
export class CydServiceProvider {

  getApiUrl : string = "http://clube-mba.pt/app/actions.php?pwdWS=pwdClubeMBACoimbra&action=";

  
  constructor(public http: Http) {
   // console.log('Hello ClubeAppServiceProvider Provider');
  }

  
  
  GetNoticias() {
    return new Promise(resolve => {
      //this.http.get(this.getApiUrl+"GetDocumentos")

      this.http.get("http://www.pt.cision.com/cisionpoint/xmlcp/default.aspx?userid=DDF9DF11-96A4-47A0-A64C-B6FB38B64A51")
      .map(res =>  res.json())
      .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
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

 


}
