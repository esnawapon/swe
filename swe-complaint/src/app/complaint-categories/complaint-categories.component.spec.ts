import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplaintCategoriesComponent } from './complaint-categories.component';

describe('ComplaintCategoriesComponent', () => {
  let component: ComplaintCategoriesComponent;
  let fixture: ComponentFixture<ComplaintCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplaintCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplaintCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
