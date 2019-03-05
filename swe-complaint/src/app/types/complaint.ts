import { User } from './user';
export interface Complaint {
  id?: string;
  topic?: string;
  content?: string;
  severity?: number;
  status?: string;
  incognito?: boolean;
  owner?: User;
  assignee?: User;
  category?: string;
  satisfaction?: number;
  created?: string;
}
