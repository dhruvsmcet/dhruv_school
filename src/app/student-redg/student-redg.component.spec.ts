import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentRedgComponent } from './student-redg.component';

describe('StudentRedgComponent', () => {
  let component: StudentRedgComponent;
  let fixture: ComponentFixture<StudentRedgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentRedgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentRedgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
