import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeRedgComponent } from './employee-redg.component';

describe('EmployeeRedgComponent', () => {
  let component: EmployeeRedgComponent;
  let fixture: ComponentFixture<EmployeeRedgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeRedgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeRedgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
