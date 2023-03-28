import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-employee-redg',
  templateUrl: './employee-redg.component.html',
  styleUrls: ['./employee-redg.component.scss'],
})
export class EmployeeRedgComponent {
  public employee = {
    fullname: null,
    empid: null,
    fathername: null,
    contact: null,
    mothername: null,
    email: null,
    dob: null,
    doj: null,
    designation: null,
    empsalary: null,
    empattd: null,
  };
  constructor(private apiService: ApiService) {}
  registerEmployee() {
    console.log('registerEmployee');

    this.apiService.doGetRequest('employee_salary').subscribe({
      next: (data) => {
        console.log('Response received', data);
      },
      error: (err) => {
        console.log(err);
      },
    });

    console.log('Request sent');
  }

  employeesAttendance() {
    console.log('employees_Attendance');
    this.apiService.doGetRequest('employees_Attendance').subscribe({
      next: (data) => {
        console.log('responce received', data);
      },
      error: (err) => {
        console.log(err);
      },
    });
    console.log('Request sent');
  }
}
