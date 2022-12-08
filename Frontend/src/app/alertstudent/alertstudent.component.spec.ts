import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertstudentComponent } from './alertstudent.component';

describe('AlertstudentComponent', () => {
  let component: AlertstudentComponent;
  let fixture: ComponentFixture<AlertstudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertstudentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlertstudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
