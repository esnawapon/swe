import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComplaintCategory } from '../types';

@Component({
  selector: 'app-complaint-categories',
  templateUrl: './complaint-categories.component.html'
})
export class ComplaintCategoriesComponent implements OnInit {

  results: ComplaintCategory[];

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.results = this.route.snapshot.data['categoryOptions'];
  }
}
