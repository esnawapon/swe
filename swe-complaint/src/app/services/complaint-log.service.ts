import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ComplaintLog } from '../types';
import { COMPLAINT as URL } from './api-list';

@Injectable({
  providedIn: 'root'
})
export class ComplaintLogService {
  constructor(private http: HttpClient) { }

  findByComplaintId(complaintId: string): Observable<ComplaintLog[]> {
    return this.http.get<ComplaintLog[]>(`${URL}/${complaintId}/logs`);
  }
}
