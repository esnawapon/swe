import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComplaintsComponent } from './complaints/complaints.component';
import { ComplaintCreateComponent } from './complaint-create/complaint-create.component';
import { ComplaintDetailComponent } from './complaint-detail/complaint-detail.component';
import { ComplaintLogComponent } from './complaint-log/complaint-log.component';
import { ComplaintCategoriesComponent } from './complaint-categories/complaint-categories.component';
import { ComplaintCategoryDetailComponent } from './complaint-category-detail/complaint-category-detail.component';
import {
  ComplaintCategoriesResolveService,
  ComplaintCategoryResolveService,
  ComplaintResolveService,
  ComplaintLogsResolveService,
  CurrentUserResolveService
} from './resolvers';
import { BlankPageComponent } from './blank-page/blank-page.component';
import { ErrorPageComponent } from './error-page/error-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/complaints', pathMatch: 'full' },
  { path: 'blank', component: BlankPageComponent },
	{ path: 'error', component: ErrorPageComponent },
  {
    path: 'complaints',
    component: ComplaintsComponent,
    resolve: {
      categoryOptions: ComplaintCategoriesResolveService
    }
  },
  {
    path: 'complaints/create',
    component: ComplaintCreateComponent,
    resolve: {
      complaint: ComplaintResolveService,
      categoryOptions: ComplaintCategoriesResolveService
    }
  },
  {
    path: 'complaints/:complaintId',
    component: ComplaintDetailComponent,
    resolve: {
      complaint: ComplaintResolveService,
      currentUser: CurrentUserResolveService
    }
  },
  {
    path: 'complaints/:complaintId/logs',
    component: ComplaintLogComponent,
    resolve: {
      complaintLogs: ComplaintLogsResolveService,
      complaint: ComplaintResolveService
    }
  },
  {
    path: 'complaint-categories',
    component: ComplaintCategoriesComponent,
    resolve: {
      categoryOptions: ComplaintCategoriesResolveService
    }
  },
  {
    path: 'complaint-categories/create',
    component: ComplaintCategoryDetailComponent,
    resolve: {
      complaintCategory: ComplaintCategoryResolveService
    }
  },
  {
    path: 'complaint-categories/:complaintCategoryId',
    component: ComplaintCategoryDetailComponent,
    resolve: {
      complaintCategory: ComplaintCategoryResolveService
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
