import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ComplaintCategoryService } from '../services';
import { ComplaintCategory } from '../types';
import { ResolveErrorService } from './resolve-error.service';

@Injectable({
  providedIn: 'root'
})
export class ComplaintCategoryResolveService implements Resolve<{} | ComplaintCategory> {
	constructor(
		private service: ComplaintCategoryService,
		private error: ResolveErrorService
	) { }
	resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<{} | ComplaintCategory> {
    const complaintCategoryId: string = route.paramMap.get('complaintCategoryId');
		if (complaintCategoryId) {
			return this.service.get(complaintCategoryId)
				.pipe(catchError((e) => this.error.handle(e, route, state)));
		} else {
			return of({});
		}
	}
}
