import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { StaffMapping } from '../types';
import { STAFF_MAPPING as URL } from './api-list';

const HTTP_OPTIONS = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class StaffMappingService {
  constructor(private http: HttpClient) { }

  query(): Observable<StaffMapping[]> {
    return this.http.get<StaffMapping[]>(URL);
  }

  get(id: string): Observable<StaffMapping> {
    return this.http.get<StaffMapping>(`${URL}/${id}`);
  }

  create(params: StaffMapping): Observable<StaffMapping> {
    return this.http.post<StaffMapping>(URL, params, HTTP_OPTIONS);
  }

  update(params: StaffMapping): Observable<StaffMapping> {
    return this.http.put<StaffMapping>(URL, params, HTTP_OPTIONS);
  }

  delete(id: string): Observable<StaffMapping> {
    return this.http.delete<StaffMapping>(`${URL}/${id}`, HTTP_OPTIONS);
  }
}
