import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComplaintsComponent } from './complaints/complaints.component';
import { EmptyResultsComponent } from './utils/empty-results/empty-results.component';
import { ComplaintCreateComponent } from './complaint-create/complaint-create.component';
import { BlankPageComponent } from './blank-page/blank-page.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { FormControlErrorComponent } from './utils/form-control-error/form-control-error.component';
import { ComplaintDetailComponent } from './complaint-detail/complaint-detail.component';
import { severityPipe } from './pipes/severity';
import { statusPipe } from './pipes/status';

@NgModule({
  declarations: [
    AppComponent,
    ComplaintsComponent,
    EmptyResultsComponent,
    ComplaintCreateComponent,
    BlankPageComponent,
    ErrorPageComponent,
    FormControlErrorComponent,
    ComplaintDetailComponent,
    severityPipe,
    statusPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
