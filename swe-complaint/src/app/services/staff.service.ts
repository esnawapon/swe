import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../types';
import { STAFF as URL } from './api-list';

const HTTP_OPTIONS = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class StaffService {
  constructor(private http: HttpClient) { }

  query(): Observable<User[]> {
    return this.http.get<User[]>(URL);
  }
}
