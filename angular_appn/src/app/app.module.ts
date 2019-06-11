import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { StudentComponent } from './student/student.component';
import { StudentSalaryPipe } from './student/studentSalary.pipe';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, EmployeeComponent, StudentComponent, StudentSalaryPipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
