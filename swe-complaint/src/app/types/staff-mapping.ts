import { ComplaintCategory } from './complaint-category';

export interface StaffMapping {
  id?: string;
  firstname?: string;
  lastname?: string;
  categories: ComplaintCategory[];
  keywords: string[];
}
