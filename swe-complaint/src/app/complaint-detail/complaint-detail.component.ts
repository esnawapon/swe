import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Complaint, ComplaintLog, CurrentUser, User } from '../types';
import { ComplaintService } from '../services';

@Component({
  selector: 'app-complaint-detail',
  templateUrl: './complaint-detail.component.html'
})
export class ComplaintDetailComponent implements OnInit {
  currentUser: CurrentUser;
  complaint: Complaint;
  comments: ComplaintLog[];
  staffOptions: User[];
  selectingAnotherStaff: boolean = false;
  constructor(
    private route: ActivatedRoute,
    public location: Location,
    private complaintService: ComplaintService,
    private router: Router
  ) { }

  ngOnInit() {
    this.complaint = this.route.snapshot.data['complaint'];
    this.currentUser = this.route.snapshot.data['currentUser'];
    this.staffOptions = this.route.snapshot.data['staffOptions'];
    if (this.complaint.assignee) {
      this.staffOptions = this.staffOptions.filter(each => each.id !== this.complaint.assignee.id)
    }
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
    const confirm = window.confirm('Confirm closing this complaint');
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

  complete() {
    const confirm = window.confirm('Confirm complete this complaint');
    if (confirm) {
      this.complaintService.complete(this.complaint.id)
      .subscribe(() => {
        this.router.navigate(['blank'], { replaceUrl: true }).then(() => {
          this.router.navigate(['/complaints', this.complaint.id], {
            replaceUrl: true
          });
        });
      }, (error) => {
        console.log('error', error);
        let message = error.error;
        window.alert(message);
      });
    }
  }

  working() {
    const confirm = window.confirm('Confirm working this complaint');
    if (confirm) {
      this.complaintService.working(this.complaint.id)
      .subscribe(() => {
        this.router.navigate(['blank'], { replaceUrl: true }).then(() => {
          this.router.navigate(['/complaints', this.complaint.id], {
            replaceUrl: true
          });
        });
      }, (error) => {
        console.log('error', error);
        let message = error.error;
        window.alert(message);
      });
    }
  }

  acknowledge() {
    const confirm = window.confirm('Confirm acknowledge this complaint');
    if (confirm) {
      this.complaintService.acknowledge(this.complaint.id)
      .subscribe(() => {
        this.router.navigate(['blank'], { replaceUrl: true }).then(() => {
          this.router.navigate(['/complaints', this.complaint.id], {
            replaceUrl: true
          });
        });
      }, (error) => {
        console.log('error', error);
        let message = error.error;
        window.alert(message);
      });
    }
  }

  backToAdmin() {
    const confirm = window.confirm('Confirm send this complaint back to admin');
    if (confirm) {
      this.complaintService.backToAdmin(this.complaint.id)
      .subscribe(() => {
        this.router.navigate(['/complaints'], {
          replaceUrl: true
        });
      }, (error) => {
        console.log('error', error);
        let message = error.error;
        window.alert(message);
      });
    }
  }

  assignTo(staffId: string) {
    const confirm = window.confirm('Confirm assign this complaint to that staff');
    if (confirm) {
      this.complaintService.assigeTo(this.complaint.id, staffId)
      .subscribe(() => {
        this.router.navigate(['/complaints'], {
          replaceUrl: true
        });
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

  isAbleToChangeStatus(): boolean {
    return (
      this.currentUser.type === 'STAFF' || this.currentUser.type === 'ADMIN'
    ) && (
      this.complaint.status === 'CREATED' ||
      this.complaint.status === 'TO_DO' ||
      this.complaint.status === 'WORKING'
    );
  }

  isAbleToChangeAssignee(): boolean {
    return this.isAbleToChangeStatus();
  }
}
