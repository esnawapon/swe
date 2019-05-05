import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { severityPipe } from './pipes/severity';
import { statusPipe } from './pipes/status';
import { fullnamePipe } from './pipes/fullname';
import { ComplaintsComponent } from './complaints/complaints.component';
import { EmptyResultsComponent } from './utils/empty-results/empty-results.component';
import { ComplaintCreateComponent } from './complaint-create/complaint-create.component';
import { BlankPageComponent } from './blank-page/blank-page.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { FormControlErrorComponent } from './utils/form-control-error/form-control-error.component';
import { ComplaintDetailComponent } from './complaint-detail/complaint-detail.component';
import { ComplaintLogComponent } from './complaint-log/complaint-log.component';
import { ComplaintCategoriesComponent } from './complaint-categories/complaint-categories.component';
import { ComplaintCategoryDetailComponent } from './complaint-category-detail/complaint-category-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    severityPipe,
    statusPipe,
    fullnamePipe,
    ComplaintsComponent,
    EmptyResultsComponent,
    ComplaintCreateComponent,
    BlankPageComponent,
    ErrorPageComponent,
    FormControlErrorComponent,
    ComplaintDetailComponent,
    ComplaintLogComponent,
    ComplaintCategoriesComponent,
    ComplaintCategoryDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbDatepickerModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
