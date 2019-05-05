import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplaintCategoryDetailComponent } from './complaint-category-detail.component';

describe('ComplaintCategoryDetailComponent', () => {
  let component: ComplaintCategoryDetailComponent;
  let fixture: ComponentFixture<ComplaintCategoryDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplaintCategoryDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplaintCategoryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
