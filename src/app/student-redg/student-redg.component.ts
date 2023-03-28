import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-student-redg',
  templateUrl: './student-redg.component.html',
  styleUrls: ['./student-redg.component.scss'],
})
export class StudentRedgComponent implements OnInit {
  public student = {
    fname: null,
    identificationMark: null,
    Dob: null,
    Weight: null,
    Height: null,
    Gender: null,
    Class: null,
    Section: null,
    roll: null,
    academicYear: null,
  };

  public classes: any;
  public classSections: any;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.getClass();
    this.classes = [];
  }

  getClass() {
    this.apiService.doGetRequest('get_class').subscribe({
      next: (data) => {
        this.classes = data;
        this.student.Class = 0 as any;
      },
      error: (err) => {},
    });
  }

  getClassSections() {
    console.log(this.student.Class);
    this.apiService
      .doGetRequest('get_class_sections?class_id=' + this.student.Class)
      .subscribe({
        next: (data) => {
          this.classSections = data;
        },
        error: (err) => {},
      });
  }
  registerStudents() {
    console.log('register Students');

    this.apiService.doPostRequest('student_register', this.student).subscribe({
      next: (data) => {
        console.log('Response received', data);
      },
      error: (err) => {
        console.log(err);
      },
    });

    console.log('Request sent');
  }
}
