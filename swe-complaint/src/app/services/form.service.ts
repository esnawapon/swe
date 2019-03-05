import { Injectable } from '@angular/core';
import { FormGroup, AbstractControl, FormArray } from '@angular/forms';

const focusableElements = [
  'input',
  'select',
  'textarea',
  'button'
];
const isFocusableElement = (tagname: string) => {
  return focusableElements.indexOf(tagname.toLowerCase()) > -1
}

@Injectable({
  providedIn: 'root'
})
export class FormService {
  constructor() { }
  focusInvalid(): void {
    const elements = document.getElementsByClassName('ng-invalid')
    if (elements.length > 0) {
      let es: HTMLElement[] = []
      for (let i = 0; i < elements.length; i++) {
        es.push(elements.item(i) as HTMLElement)
      }
      es = es.filter((e) => {
        return isFocusableElement(e.tagName.toLowerCase())
      })
      if (!es[0]) {
        // tslint:disable-next-line
        console.error('unable to find invalid element')
        return
      }
      es[0].focus()
      document.body.scrollTop = es[0].offsetTop
    }
  }

  markAsTouched(form: FormGroup | FormArray | AbstractControl): void {
    if (form instanceof FormArray || form instanceof FormGroup) {
      Object.keys(form.controls).forEach((key) => {
        this.markAsTouched(form.controls[key])
      })
    } else if (form instanceof AbstractControl) {
      form.markAsTouched()
    }
  }
}
