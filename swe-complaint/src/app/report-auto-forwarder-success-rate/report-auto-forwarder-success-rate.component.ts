import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { ReportService } from '../services';
import { formatNgbDate } from '../utils/date-util';

@Component({
  selector: 'app-report-auto-forwarder-success-rate',
  templateUrl: './report-auto-forwarder-success-rate.component.html'
})
export class ReportAutoForwarderSuccessRateComponent implements OnInit {
  faCalendar = faCalendar;
  form: FormGroup;
  reportData: {};
  constructor(
    private reportService: ReportService
  ) { }

  ngOnInit() {
    const currentYear = new Date().getFullYear();
    this.form = new FormGroup({
      dateFrom: new FormControl({
        year: currentYear,
        month: 1,
        day: 1
      }),
      dateTo: new FormControl({
        year: currentYear,
        month: 12,
        day: 31
      })
    });
  }

  onGenerateReport() {
    const params = this.form.value;
    params['dateFrom'] = formatNgbDate(params['dateFrom']);
    params['dateTo'] = formatNgbDate(params['dateTo']);
    this.form.disable();
    this.reportService.autoForwarderSuccessRate(params)
    .subscribe((response) => {
      this.reportData = response;
      this.form.enable();
    }, (error) => {
      console.log('error', error);
      let message = error.error;
      window.alert(message);
      this.form.enable();
    });
  }
}
