import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovestudentComponent } from './approvestudent.component';

describe('ApprovestudentComponent', () => {
  let component: ApprovestudentComponent;
  let fixture: ComponentFixture<ApprovestudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprovestudentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApprovestudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
