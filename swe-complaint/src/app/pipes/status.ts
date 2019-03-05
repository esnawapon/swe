import { Pipe, PipeTransform } from '@angular/core';

const STATUSES = {
  CREATED: 'Waiting for relevant staff',
  TO_DO: 'Acknowledged, waiting for processing',
  WORKING: 'In processing',
  DONE_COMPLETED: 'Completed',
  DONE_DELETED: 'Close by owner',
  DONE_UNSOLVED: 'Close by staff',
}
@Pipe({name: 'status'})
export class statusPipe implements PipeTransform {
  transform(value: string): string {
    return STATUSES[value];
  }
}
