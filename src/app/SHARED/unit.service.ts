import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { APP_SETTINGS } from '../app.settings'

import { IUnit } from './unit';

@Injectable()
export class UnitService {
   private _unitsUrl = 'https://raw.githubusercontent.com/USGS-WiM/lide-lims/master/src/app/demo-services/units.json';

  constructor(private _http: Http) { }

  getUnits(): Observable<IUnit[]> {
    let options = new RequestOptions({ headers: APP_SETTINGS.MIN_AUTH_JSON_HEADERS });

    return this._http.get(APP_SETTINGS.UNITS_URL, options)
    //return this._http.get(this._unitsUrl)
                .map((response: Response) => <IUnit[]>response.json())
                //.do(data => console.log('Units data: ' + JSON.stringify(data)))
                .catch(this.handleError);
  }

  private handleError (error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

}
