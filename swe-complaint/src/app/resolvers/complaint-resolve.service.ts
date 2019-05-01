import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ComplaintService } from '../services';
import { Complaint } from '../types';
import { ResolveErrorService } from './resolve-error.service';

@Injectable({
  providedIn: 'root'
})
export class ComplaintResolveService implements Resolve<{} | Complaint> {
	constructor(
		private service: ComplaintService,
		private error: ResolveErrorService
	) { }
	resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<{} | Complaint> {
    const complaintId: string = route.paramMap.get('complaintId');
		if (complaintId) {
			return this.service.get(complaintId)
				.pipe(catchError((e) => this.error.handle(e, route, state)));
		} else {
			return of({ incognito: false });
		}
	}
}
