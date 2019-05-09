import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ComplaintCategory } from '../types';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ComplaintCategoryService, FormService } from '../services';

@Component({
  selector: 'app-complaint-category-detail',
  templateUrl: './complaint-category-detail.component.html'
})
export class ComplaintCategoryDetailComponent implements OnInit {
  complaintCategory: ComplaintCategory;
  form: FormGroup;
  submitting: boolean;

  constructor(
    private route: ActivatedRoute,
    private complaintCategoryService: ComplaintCategoryService,
    private router: Router,
    private formService: FormService
  ) { }

  ngOnInit() {
    this.complaintCategory = this.route.snapshot.data['complaintCategory'];
    this.form = new FormGroup({
      id: new FormControl(this.complaintCategory.id),
      name: new FormControl(this.complaintCategory.name, Validators.required),
      defaultTopic: new FormControl(this.complaintCategory.defaultTopic),
      defaultContent: new FormControl(this.complaintCategory.defaultContent),
    });
  }

  onSubmit(): void {
    this.formService.markAsTouched(this.form);
    if (this.form.valid) {
      const complaintCategory: ComplaintCategory = this.form.value;
      this.submitting = true;
      this.form.disable();
      this.complaintCategoryService.save(complaintCategory)
      .subscribe((response) => {
        this.router.navigate(['/complaint-categories']);
      }, (error) => {
        console.log('error', error);
        let message = error.error;
        window.alert(message);
        this.submitting = false;
        this.form.enable();
      });
    } else {
      this.formService.focusInvalid();
      console.log('invalid form');
    }
  }

  delete(): void {
    const confirm = window.confirm('Confirm deleting this category');
    if (confirm) {
      this.complaintCategoryService.delete(this.complaintCategory.id)
      .subscribe(() => {
        this.router.navigate(['/complaint-categories']);
      }, (error) => {
        console.log('error', error);
        let message = error.error;
        window.alert(message);
      });
    }
  }
}
