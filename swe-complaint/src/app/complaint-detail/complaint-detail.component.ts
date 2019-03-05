import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Complaint } from '../types';

@Component({
  selector: 'app-complaint-detail',
  templateUrl: './complaint-detail.component.html'
})
export class ComplaintDetailComponent implements OnInit {
  complaint: Complaint;
  constructor(
    private route: ActivatedRoute,
    public location: Location
  ) { }

  ngOnInit() {
    this.complaint = this.route.snapshot.data['complaint'];
  }
}
