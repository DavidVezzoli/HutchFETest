import { Injectable } from '@angular/core';
import { StaticData } from '../interfaces/responses/StaticData';
import { MockStaticData } from '../mockdata/StaticData';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StaticDataService {

  constructor() { }

  getStaticData(appVersion: string, dataVersion: string, adminToken: string): Observable<StaticData> {
    return of(MockStaticData);
  }
}
