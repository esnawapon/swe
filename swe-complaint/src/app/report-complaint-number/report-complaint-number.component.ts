import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import * as Highcharts from 'highcharts';
import { ReportService } from '../services';
import { formatNgbDate } from '../utils/date-util';
import { ComplaintNumber, ComplaintCategory } from '../types';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-report-complaint-number',
  templateUrl: './report-complaint-number.component.html'
})
export class ReportComplaintNumberComponent implements OnInit {
  faCalendar = faCalendar;
  form: FormGroup;
  rawReportData: ComplaintNumber[];
  categoryOptions: ComplaintCategory[];
  sumReportData: number;

  constructor(
    private route: ActivatedRoute,
    private reportService: ReportService
  ) { }

  ngOnInit() {
    this.categoryOptions = this.route.snapshot.data['categoryOptions'];
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
    this.reportService.complaintNumber(params)
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
    this.sumReportData = this.rawReportData.map(each => each.count).reduce((a, b) => a += b);
    const categories = [];
    const data = [];
    this.categoryOptions.forEach((each, i) => {
      categories.push(`${i + 1}. ${each.name}`);
      const foundInReport = this.rawReportData.find(r => r.categoryId === each.id);
      if (foundInReport) {
        data.push(foundInReport.count);
      } else {
        data.push(0);
      }
    });
    categories.push(`${categories.length + 1}. Others`);
    const otherCount = this.rawReportData.find(r => !r.categoryId);
    if (otherCount) {
      data.push(otherCount.count);
    } else {
      data.push(0);
    }
    Highcharts.chart('chart', {
      chart: {
        type: 'column'
      },
      title: {
        text: `Total complaint number: ${this.sumReportData}`
      },
      subtitle: {
        text: ''
      },
      xAxis: {
        categories,
        crosshair: true
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Number'
        }
      },
      tooltip: {
        pointFormat: '<b>{point.y:.0f}',
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0
        }
      },
      series: [{
        type: 'column',
        name: 'Complaint number',
        data
      }]
    });
  }
}
