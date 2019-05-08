import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffMappingComponent } from './staff-mapping.component';

describe('StaffMappingComponent', () => {
  let component: StaffMappingComponent;
  let fixture: ComponentFixture<StaffMappingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffMappingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
