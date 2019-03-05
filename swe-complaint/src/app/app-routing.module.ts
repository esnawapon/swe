import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComplaintsComponent } from './complaints/complaints.component';
import { ComplaintCreateComponent } from './complaint-create/complaint-create.component';
import { ComplaintDetailComponent } from './complaint-detail/complaint-detail.component';
import { ComplaintCategoriesResolveService, ComplaintResolveService } from './resolvers';
import { BlankPageComponent } from './blank-page/blank-page.component';
import { ErrorPageComponent } from './error-page/error-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/complaints', pathMatch: 'full' },
  { path: 'blank', component: BlankPageComponent },
	{ path: 'error', component: ErrorPageComponent },
  { path: 'complaints', component: ComplaintsComponent },
  {
    path: 'complaints/create',
    component: ComplaintCreateComponent,
    resolve: {
      complaint: ComplaintResolveService,
      categoryOptions: ComplaintCategoriesResolveService
    }
  },
  {
    path: 'complaints/:id',
    component: ComplaintDetailComponent,
    resolve: {
      complaint: ComplaintResolveService
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
