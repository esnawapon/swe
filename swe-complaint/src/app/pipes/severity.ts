import { Pipe, PipeTransform } from '@angular/core';

const SEVERITIES = ['Suggestion', 'Normal', 'High impact']
@Pipe({name: 'severity'})
export class severityPipe implements PipeTransform {
  transform(value: number): string {
    return SEVERITIES[value];
  }
}