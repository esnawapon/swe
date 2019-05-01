import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ComplaintLogService } from '../services';
import { ComplaintLog } from '../types';
import { ResolveErrorService } from './resolve-error.service';

@Injectable({
  providedIn: 'root'
})
export class ComplaintLogsResolveService implements Resolve<{} | ComplaintLog[]> {
	constructor(
    private service: ComplaintLogService,
		private error: ResolveErrorService
	) { }
	resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<{} | ComplaintLog[]> {
		const complaintId: string = route.paramMap.get('complaintId');
		return this.service.findByComplaintId(complaintId).pipe(catchError((e) => this.error.handle(e, route, state)));
	}
}
