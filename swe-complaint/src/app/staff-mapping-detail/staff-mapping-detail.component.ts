import { Component, OnInit } from '@angular/core';
import { StaffMapping, ComplaintCategory, User } from '../types';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StaffMappingService, FormService } from '../services';

@Component({
  selector: 'app-staff-mapping-detail',
  templateUrl: './staff-mapping-detail.component.html'
})
export class StaffMappingDetailComponent implements OnInit {
  staffMapping: StaffMapping;
  categoryOptions: ComplaintCategory[];
  staffOptions: User[];

  form: FormGroup;
  submitting: boolean;

  constructor(
    private route: ActivatedRoute,
    private staffMappingService: StaffMappingService,
    private router: Router,
    private formService: FormService
  ) { }

  ngOnInit() {
    this.staffMapping = this.route.snapshot.data['staffMapping'];
    this.categoryOptions = this.route.snapshot.data['categoryOptions'];
    this.staffOptions = this.route.snapshot.data['staffOptions'];
    const formValue = this.transformToFormValue(this.staffMapping, this.categoryOptions, this.staffOptions);
    this.form = new FormGroup({
      staff: new FormControl(formValue['staff'], Validators.required),
      categories: new FormArray(formValue['categories'].map(each => new FormControl(each))),
      keywords: new FormControl(formValue['keywords'])
    });
  }

  onSubmit(): void {
    this.formService.markAsTouched(this.form);
    if (this.form.valid) {
      const staffMapping: StaffMapping = this.transformToModel(this.form.value, this.categoryOptions);
      if (!staffMapping.categories.length && !staffMapping.keywords.length) {
        window.alert('Staff must at least map to a category or a keyword');
        return;
      };
      this.submitting = true;
      this.form.disable();
      (this.staffMapping.id
        ? this.staffMappingService.update(staffMapping)
        : this.staffMappingService.create(staffMapping)
      )
      .subscribe((response) => {
        this.router.navigate(['/staff-mapping']);
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
    const confirm = window.confirm('Confirm deleting this mapping');
    if (confirm) {
      this.staffMappingService.delete(this.staffMapping.id)
      .subscribe(() => {
        this.router.navigate(['/staff-mapping']);
      }, (error) => {
        console.log('error', error);
        let message = error.error;
        window.alert(message);
      });
    }
  }

  transformToFormValue(staffMapping: StaffMapping, categoryOptions: ComplaintCategory[], staffOptions: User[]): {} {
    return {
      staff: staffMapping.id ? staffOptions.find(each => each.id === staffMapping.id) : null,
      categories: categoryOptions.map(each => staffMapping.categories.map(each => each.id).indexOf(each.id) !== -1),
      keywords: !staffMapping.keywords || !staffMapping.keywords.length ? '' : staffMapping.keywords.join(',')
    }
  }

  transformToModel(formValue: {}, categoryOptions: ComplaintCategory[]): StaffMapping {
    return {
      id: formValue['staff'].id,
      firstname: formValue['staff'].firstname,
      lastname: formValue['staff'].lastname,
      categories: categoryOptions.filter((each, i) => formValue['categories'][i]),
      keywords: formValue['keywords'].split(',').map(each => each.trim()).filter(each => each.length)
    };
  }
}
