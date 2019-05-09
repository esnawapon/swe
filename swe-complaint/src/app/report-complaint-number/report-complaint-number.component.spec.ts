import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportComplaintNumberComponent } from './report-complaint-number.component';

describe('ReportComplaintNumberComponent', () => {
  let component: ReportComplaintNumberComponent;
  let fixture: ComponentFixture<ReportComplaintNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportComplaintNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportComplaintNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
