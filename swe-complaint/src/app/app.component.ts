import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { UserService } from './services';
import { CurrentUser } from './types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'swe-complaint';
  user: CurrentUser;
  constructor(
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0)

    });
    this.userService.getCurrentUser()
    .subscribe((response) => {
      this.user = response;
    })
  }
}
