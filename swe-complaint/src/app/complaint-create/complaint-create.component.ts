import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { ComplaintCategory, Complaint, SeverityLevel, SERVERITY_LEVELS } from '../types';
import { ComplaintService, FormService } from '../services';

@Component({
  selector: 'app-complaint-create',
  templateUrl: './complaint-create.component.html'
})
export class ComplaintCreateComponent implements OnInit, OnDestroy {
  form: FormGroup;
  complaint: Complaint;
  submitting: boolean = false;
  categoryOptions: ComplaintCategory[];
  severityOptions: SeverityLevel[] = SERVERITY_LEVELS;
  categoryControl: AbstractControl;
  topicControl: AbstractControl;
  contentControl: AbstractControl;
  categoryChangeSubs: Subscription;

  constructor(
    private route: ActivatedRoute,
    private complaintService: ComplaintService,
    private router: Router,
    private formService: FormService
  ) { }

  ngOnInit() {
    this.complaint = this.route.snapshot.data['complaint'];
    this.categoryOptions = this.route.snapshot.data['categoryOptions'];
    this.form = new FormGroup({
      category: new FormControl(null),
      topic: new FormControl('', Validators.required),
      content: new FormControl('', Validators.required),
      severity: new FormControl(1, Validators.required),
      incognito: new FormControl(false)
    });
    this.categoryControl = this.form.controls['category'];
    this.topicControl = this.form.controls['topic'];
    this.contentControl = this.form.controls['content'];

    this.categoryChangeSubs = this.categoryControl.valueChanges.subscribe((value) => {
      if (!value) {
        return;
      }
      if (!this.topicControl.value || this.topicControl.untouched || !this.topicControl.dirty) {
        this.topicControl.setValue(value.defaultTopic);
      }
      if (!this.contentControl.value || this.contentControl.untouched || !this.contentControl.dirty) {
        this.contentControl.setValue(value.defaultContent);
      }
    });
  }

  ngOnDestroy() {
    this.categoryChangeSubs.unsubscribe();
  }

  onSubmit(): void {
    this.formService.markAsTouched(this.form);
    if (this.form.valid) {
      const complaint: Complaint = this.form.value;
      this.submitting = true;
      this.form.disable();
      this.complaintService.create(complaint).pipe(
        finalize(() => {
          this.submitting = false;
          this.form.enable();
        })
      ).subscribe((response) => {
        this.router.navigate(['blank'], { replaceUrl: true }).then(() => {
          this.router.navigate(['/complaints', response.id], {
            replaceUrl: true
          });
        });
      }, (error) => {
        console.log('error', error);
        let message = error.error;
        window.alert(message);
      });
    } else {
      this.formService.focusInvalid();
      console.log('invalid form');
    }
  }
}
