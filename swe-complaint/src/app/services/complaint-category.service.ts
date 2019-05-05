import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ComplaintCategory } from '../types';
import { COMPLAINT_CATEGORY as URL } from './api-list';

const HTTP_OPTIONS = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class ComplaintCategoryService {
  constructor(private http: HttpClient) { }

  query(): Observable<ComplaintCategory[]> {
    return this.http.get<ComplaintCategory[]>(URL);
  }

  get(id: string): Observable<ComplaintCategory> {
    return this.http.get<ComplaintCategory>(`${URL}/${id}`);
  }

  save(params: ComplaintCategory): Observable<ComplaintCategory> {
    if (params.id) {
      return this.update(params);
    } else {
      return this.create(params);
    }
  }

  create(params: ComplaintCategory): Observable<ComplaintCategory> {
    return this.http.post<ComplaintCategory>(URL, params, HTTP_OPTIONS);
  }

  update(params: ComplaintCategory): Observable<ComplaintCategory> {
    return this.http.put<ComplaintCategory>(URL, params, HTTP_OPTIONS);
  }

  delete(id: string): Observable<ComplaintCategory> {
    return this.http.delete<ComplaintCategory>(`${URL}/${id}`, HTTP_OPTIONS);
  }
}
