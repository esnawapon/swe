import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportAutoForwarderSuccessRateComponent } from './report-auto-forwarder-success-rate.component';

describe('ReportAutoForwarderSuccessRateComponent', () => {
  let component: ReportAutoForwarderSuccessRateComponent;
  let fixture: ComponentFixture<ReportAutoForwarderSuccessRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportAutoForwarderSuccessRateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportAutoForwarderSuccessRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
