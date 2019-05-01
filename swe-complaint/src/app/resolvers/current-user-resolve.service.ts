import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { UserService } from '../services';
import { CurrentUser } from '../types';
import { ResolveErrorService } from './resolve-error.service';

@Injectable({
  providedIn: 'root'
})
export class CurrentUserResolveService implements Resolve<{} | CurrentUser> {
  constructor(
    private service: UserService,
    private error: ResolveErrorService
  ) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<{} | CurrentUser> {
    return this.service.getCurrentUser()
  }
}
