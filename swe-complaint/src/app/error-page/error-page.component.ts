import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-page',
  template: `
    <h1 class="text-center">Opps... Something went wrong.</h1>
  `,
})
export class ErrorPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
