import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentRedgComponent } from './student-redg/student-redg.component';
import { EmployeeRedgComponent } from './employee-redg/employee-redg.component';

import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  { path: '', redirectTo: 'studentRegistration', pathMatch: 'full' },
  { path: 'studentRegistration', component: StudentRedgComponent },
  { path: 'EmployeesDetails', component: EmployeeRedgComponent },
  { path: 'Home', component: HomepageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
