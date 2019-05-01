import { User } from './user';

export interface ComplaintLog {
  id?: string;
  timestamp?: string;
  type?: string;
  statusFrom?: string;
  statusTo?: string;
  assigneeFrom?: User;
  assigneeTo?: User;
  comment?: string;
  actionStudentId?: string;
  actionStaff?: User;
  actionAdmin?: User;
}
