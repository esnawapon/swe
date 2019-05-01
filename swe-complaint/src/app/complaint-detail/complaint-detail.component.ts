import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Complaint, ComplaintLog } from '../types';
import { ComplaintService } from '../services';

@Component({
  selector: 'app-complaint-detail',
  templateUrl: './complaint-detail.component.html'
})
export class ComplaintDetailComponent implements OnInit {
  complaint: Complaint;
  comments: ComplaintLog[];
  constructor(
    private route: ActivatedRoute,
    public location: Location,
    private complaintService: ComplaintService
  ) { }

  ngOnInit() {
    this.complaint = this.route.snapshot.data['complaint'];
    this.loadComments();
  }

  loadComments() {
    this.complaintService.findCommentsByComplaintId(this.complaint.id)
      .subscribe((response) => {
        this.comments = response;
      });
  }

  addComment(comment: string) {
    if (!comment || !comment.length) return;
    this.complaintService.addComment(this.complaint.id, { comment })
      .subscribe((response) => this.loadComments());
  }
}
