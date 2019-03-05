import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms'

@Component({
  selector: 'utils-form-control-error',
  template: `
  <small class="text-danger" *ngIf="isError()">
    <ng-content></ng-content>
  </small>
`
})
export class FormControlErrorComponent {
  @Input() control: FormControl;
  @Input() error: string;

  constructor() { }

  isError(): boolean {
    return this.control.touched && this.control.errors && this.control.errors[this.error]
  }
}
