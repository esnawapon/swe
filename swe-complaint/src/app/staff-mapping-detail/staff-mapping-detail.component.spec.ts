import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffMappingDetailComponent } from './staff-mapping-detail.component';

describe('StaffMappingDetailComponent', () => {
  let component: StaffMappingDetailComponent;
  let fixture: ComponentFixture<StaffMappingDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffMappingDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffMappingDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
