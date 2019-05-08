import { Component, OnInit } from '@angular/core';
import { StaffMapping } from '../types';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-staff-mapping',
  templateUrl: './staff-mapping.component.html'
})
export class StaffMappingComponent implements OnInit {
  results: StaffMapping[];

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.results = this.route.snapshot.data['staffMappings'];
  }
}
