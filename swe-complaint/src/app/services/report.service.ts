import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { removeNullParams } from '../utils/http-util';
import { REPORT as URL } from './api-list';
import { AutoForwarderLog } from '../types';

const HTTP_OPTIONS = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class ReportService {
  constructor(private http: HttpClient) { }

  autoForwarderSuccessRate(params: AutoForwarderLog[]): Observable<AutoForwarderLog[]> {
    let httpParams = new HttpParams({ fromObject: removeNullParams(params) });
    return this.http.get<AutoForwarderLog[]>(`${URL}/auto-forwarder-success-rate`, { params: httpParams });
  }

  complaintNumber(params: {}): Observable<{}> {
    let httpParams = new HttpParams({ fromObject: removeNullParams(params) });
    return this.http.get<{}>(`${URL}/complaint-number`, { params: httpParams });
  }
}
