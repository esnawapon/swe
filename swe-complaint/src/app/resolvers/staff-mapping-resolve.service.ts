import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { StaffMappingService } from '../services';
import { StaffMapping } from '../types';
import { ResolveErrorService } from './resolve-error.service';

@Injectable({
  providedIn: 'root'
})
export class StaffMappingResolveService implements Resolve<{} | StaffMapping> {
	constructor(
		private service: StaffMappingService,
		private error: ResolveErrorService
	) { }
	resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<{} | StaffMapping> {
    const staffId: string = route.paramMap.get('staffId');
		if (staffId) {
			return this.service.get(staffId)
				.pipe(catchError((e) => this.error.handle(e, route, state)));
		} else {
			return of({categories: [], keywords: []});
		}
	}
}
