import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { Complaint, SERVERITY_LEVELS, SeverityLevel, STATUSES, Status, ComplaintCategory } from '../types';
import { ComplaintService } from '../services';
import { formatNgbDate } from '../utils/date-util';

@Component({
  selector: 'app-complaints',
  templateUrl: './complaints.component.html'
})
export class ComplaintsComponent implements OnInit {
  form: FormGroup;
  results: Complaint[];
  severityOptions: SeverityLevel[] = SERVERITY_LEVELS;
  statusOptions: Status[] = STATUSES;
  categoryOptions: ComplaintCategory[];
  constructor(
    private complaintService: ComplaintService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.categoryOptions = this.route.snapshot.data['categoryOptions'];
    this.form = new FormGroup({
      keyword: new FormControl(),
      dateFrom: new FormControl(),
      dateTo: new FormControl(),
      categoryId: new FormControl(),
      status: new FormControl(),
      severity: new FormControl()
    });
    this.onSearch();
  }

  onSearch(): void {
    if (this.form.valid) {
      const params: {} = this.form.value;
      params['dateFrom'] = formatNgbDate(params['dateFrom']);
      params['dateTo'] = formatNgbDate(params['dateTo']);
      this.form.disable();
      this.complaintService.query(params).pipe(
        finalize(() => {
          this.form.enable();
        })
      ).subscribe((response) => {
        this.results = response;
      }, (error) => {
        // this.modal.alert(error);
        console.log('error', error);
      });
    }
  }
}
