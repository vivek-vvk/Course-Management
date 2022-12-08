import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentenrollComponent } from './studentenroll.component';

describe('StudentenrollComponent', () => {
  let component: StudentenrollComponent;
  let fixture: ComponentFixture<StudentenrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentenrollComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentenrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
