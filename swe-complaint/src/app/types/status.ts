export interface Status {
  value?: string;
  name?: string;
}

export const STATUS_CREATED: Status = {
  value: 'CREATED',
  name: 'Waiting for relevant staff'
}

export const STATUS_TO_DO: Status = {
  value: 'TO_DO',
  name: 'Acknowledged, waiting for processing'
}

export const STATUS_WORKING: Status = {
  value: 'WORKING',
  name: 'In processing'
}

export const STATUS_DONE_COMPLETED: Status = {
  value: 'DONE_COMPLETED',
  name: 'Completed'
}

export const STATUS_DONE_DELETED: Status = {
  value: 'DONE_DELETED',
  name: 'Close by owner'
}

export const STATUS_DONE_UNSOLVED: Status = {
  value: 'DONE_UNSOLVED',
  name: 'Close by staff'
}

export const STATUSES: Status[] = [
  STATUS_CREATED, STATUS_TO_DO, STATUS_WORKING, STATUS_DONE_COMPLETED, STATUS_DONE_DELETED, STATUS_DONE_UNSOLVED
]
