import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Complaint, ComplaintLog } from '../types';
import { removeNullParams } from '../utils/http-util';
import { COMPLAINT as URL } from './api-list';

const HTTP_OPTIONS = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class ComplaintService {
  constructor(private http: HttpClient) { }

  query(params: {}): Observable<Complaint[]> {

    let httpParams = new HttpParams({ fromObject: removeNullParams(params) });
    return this.http.get<Complaint[]>(URL, { params: httpParams });
  }

  get(id: string): Observable<Complaint> {
    return this.http.get<Complaint>(`${URL}/${id}`);
  }

  create(params: Complaint): Observable<Complaint> {
    return this.http.post<Complaint>(URL, params, HTTP_OPTIONS);
  }

  findLogsByComplaintId(complaintId: string): Observable<ComplaintLog[]> {
    return this.http.get<ComplaintLog[]>(`${URL}/${complaintId}/logs`);
  }

  findCommentsByComplaintId(complaintId: string): Observable<ComplaintLog[]> {
    return this.http.get<ComplaintLog[]>(`${URL}/${complaintId}/comments`);
  }

  addComment(id: string, params: ComplaintLog): Observable<ComplaintLog> {
    return this.http.post<ComplaintLog>(`${URL}/${id}/comment`, params, HTTP_OPTIONS);
  }

  close(id: string): Observable<Complaint> {
    return this.http.put<ComplaintLog>(`${URL}/${id}/close`, HTTP_OPTIONS);
  }

  acknowledge(id: string): Observable<Complaint> {
    return this.http.put<ComplaintLog>(`${URL}/${id}/acknowledge`, HTTP_OPTIONS);
  }

  working(id: string): Observable<Complaint> {
    return this.http.put<ComplaintLog>(`${URL}/${id}/working`, HTTP_OPTIONS);
  }

  complete(id: string): Observable<Complaint> {
    return this.http.put<ComplaintLog>(`${URL}/${id}/complete`, HTTP_OPTIONS);
  }
}
