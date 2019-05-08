import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { StaffService } from '../services';
import { User } from '../types';
import { ResolveErrorService } from './resolve-error.service';

@Injectable({
  providedIn: 'root'
})
export class StaffsResolveService implements Resolve<{} | User[]> {
  constructor(
    private service: StaffService,
    private error: ResolveErrorService
  ) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<{} | User[]> {
    return this.service.query().pipe(catchError((e) => this.error.handle(e, route, state)));
  }
}
