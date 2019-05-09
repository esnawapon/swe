import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../types';

@Pipe({name: 'fullname'})
export class fullnamePipe implements PipeTransform {
  transform(value: User): string {
    if (!value) return 'N/A';
    return `${value.firstname} ${value.lastname}`;
  }
}
