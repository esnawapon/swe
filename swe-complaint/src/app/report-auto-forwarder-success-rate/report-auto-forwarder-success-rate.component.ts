import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import * as Highcharts from 'highcharts';
import { ReportService } from '../services';
import { formatNgbDate } from '../utils/date-util';
import { AutoForwarderLog } from '../types';

@Component({
  selector: 'app-report-auto-forwarder-success-rate',
  templateUrl: './report-auto-forwarder-success-rate.component.html'
})
export class ReportAutoForwarderSuccessRateComponent implements OnInit {
  faCalendar = faCalendar;
  form: FormGroup;
  rawReportData: AutoForwarderLog[];

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
        this.rawReportData = response;
        this.generateHighChart();
        this.form.enable();
      }, (error) => {
        console.log('error', error);
        let message = error.error;
        window.alert(message);
        this.form.enable();
      });
  }

  generateHighChart() {
    Highcharts.chart('chart', {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: 'Auto forwarding success rate'
      },
      tooltip: {
        pointFormat: '<b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %'
          }
        },
      },
      series: [{
        type: 'pie',
        data: [
          {
            name: 'Successful',
            y: this.rawReportData.filter(each  => each.success).length
          },
          {
            name: 'Failure',
            y: this.rawReportData.filter(each  => !each.success).length
          }
        ]
      }]
    });
  }
}
