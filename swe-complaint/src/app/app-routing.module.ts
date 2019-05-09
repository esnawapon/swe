import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComplaintsComponent } from './complaints/complaints.component';
import { ComplaintCreateComponent } from './complaint-create/complaint-create.component';
import { ComplaintDetailComponent } from './complaint-detail/complaint-detail.component';
import { ComplaintLogComponent } from './complaint-log/complaint-log.component';
import { ComplaintCategoriesComponent } from './complaint-categories/complaint-categories.component';
import { ComplaintCategoryDetailComponent } from './complaint-category-detail/complaint-category-detail.component';
import { StaffMappingComponent } from './staff-mapping/staff-mapping.component';
import { StaffMappingDetailComponent } from './staff-mapping-detail/staff-mapping-detail.component';
import { ReportComponent } from './report/report.component';
import { ReportComplaintNumberComponent } from './report-complaint-number/report-complaint-number.component';
import { ReportAutoForwarderSuccessRateComponent } from './report-auto-forwarder-success-rate/report-auto-forwarder-success-rate.component';
import {
  ComplaintCategoriesResolveService,
  ComplaintCategoryResolveService,
  ComplaintResolveService,
  ComplaintLogsResolveService,
  CurrentUserResolveService,
  StaffMappingsResolveService,
  StaffMappingResolveService,
  StaffsResolveService
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
      currentUser: CurrentUserResolveService,
      staffOptions: StaffsResolveService
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
  {
    path: 'staff-mapping',
    component: StaffMappingComponent,
    resolve: {
      staffMappings: StaffMappingsResolveService
    }
  },
  {
    path: 'staff-mapping/create',
    component: StaffMappingDetailComponent,
    resolve: {
      staffMapping: StaffMappingResolveService,
      categoryOptions: ComplaintCategoriesResolveService,
      staffOptions: StaffsResolveService
    }
  },
  {
    path: 'staff-mapping/:staffId',
    component: StaffMappingDetailComponent,
    resolve: {
      staffMapping: StaffMappingResolveService,
      categoryOptions: ComplaintCategoriesResolveService,
      staffOptions: StaffsResolveService
    }
  },
  {
    path: 'report',
    component: ReportComponent
  },
  {
    path: 'report/complaint-number',
    component: ReportComplaintNumberComponent
  },
  {
    path: 'report/auto-forwarder-success-rate',
    component: ReportAutoForwarderSuccessRateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
