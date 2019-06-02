import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { StudentComponent } from './student/student.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, EmployeeComponent, StudentComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
