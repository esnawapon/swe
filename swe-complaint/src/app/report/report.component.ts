import { Component, OnInit } from '@angular/core';
import { faChartBar, faChartPie } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html'
})
export class ReportComponent implements OnInit {
  faChartBar = faChartBar;
  faChartPie = faChartPie;
  constructor() { }

  ngOnInit() {
  }

}
