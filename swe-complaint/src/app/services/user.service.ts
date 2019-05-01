import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { CurrentUser } from '../types';
import { USER as URL } from './api-list';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  currentUser: CurrentUser;
  constructor(private http: HttpClient) { }

  getCurrentUser(): Observable<CurrentUser> {
    if (this.currentUser) {
      return of(this.currentUser);
    }
    return this.http.get<CurrentUser>(`${URL}/current`);
  }
}
