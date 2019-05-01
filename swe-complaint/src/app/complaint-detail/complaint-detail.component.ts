import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Complaint, ComplaintLog, CurrentUser } from '../types';
import { ComplaintService } from '../services';

@Component({
  selector: 'app-complaint-detail',
  templateUrl: './complaint-detail.component.html'
})
export class ComplaintDetailComponent implements OnInit {
  currentUser: CurrentUser;
  complaint: Complaint;
  comments: ComplaintLog[];
  constructor(
    private route: ActivatedRoute,
    public location: Location,
    private complaintService: ComplaintService,
    private router: Router
  ) { }

  ngOnInit() {
    this.complaint = this.route.snapshot.data['complaint'];
    this.currentUser = this.route.snapshot.data['currentUser'];
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
      .subscribe(() => this.loadComments());
  }

  close() {
    const confirm = window.confirm('Confirm to close this complaint');
    if (confirm) {
      this.complaintService.close(this.complaint.id)
      .subscribe(() => {
        this.router.navigate(['/complaints']);
      }, (error) => {
        console.log('error', error);
        let message = error.error;
        window.alert(message);
      });
    }
  }

  isAbleToClose(): boolean {
    return this.currentUser.type === 'STUDENT' && this.complaint.status === 'CREATED';
  }
}
