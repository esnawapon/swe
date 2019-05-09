import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComplaintLog, Complaint } from '../types';

@Component({
  selector: 'app-complaint-log',
  templateUrl: './complaint-log.component.html'
})
export class ComplaintLogComponent implements OnInit {
  complaintLogs: ComplaintLog;
  complaint: Complaint;
  constructor(
    private route: ActivatedRoute
  ) { }
  ngOnInit() {
    this.complaintLogs = this.route.snapshot.data['complaintLogs'];
    this.complaint = this.route.snapshot.data['complaint'];
    console.log(this.complaintLogs);
  }

}
