import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import { Complaint } from '../types';
import { ComplaintService } from '../services';

@Component({
  selector: 'app-complaints',
  templateUrl: './complaints.component.html'
})
export class ComplaintsComponent implements OnInit {
  form: FormGroup;
  results: Complaint[];
  constructor(
    private complaintService: ComplaintService
  ) { }

  ngOnInit() {
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
      console.log(params)
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
