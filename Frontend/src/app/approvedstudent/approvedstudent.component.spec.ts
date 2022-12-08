import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovedstudentComponent } from './approvedstudent.component';

describe('ApprovedstudentComponent', () => {
  let component: ApprovedstudentComponent;
  let fixture: ComponentFixture<ApprovedstudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprovedstudentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApprovedstudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
