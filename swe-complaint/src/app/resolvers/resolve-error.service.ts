import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResolveErrorService {

	constructor(
		private router: Router,
		private location: Location
	) { }

	handle(error: any, route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<{}> {
		// const url = route.url.map((u) => u.path).join('/');
		let url = state.url;
		if (url.charAt(0) === '/') {
			url = url.slice(1); // make it relative URL
		}
		this.router.navigate(['error'], {
			queryParams: { code: error.status },
			skipLocationChange: true
		});
		setTimeout(() => {
			this.location.go(url);
		});

		return of({});
	}
}
