import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { StudentComponent } from './student/student.component';
import { StudentSalaryPipe } from './student/studentSalary.pipe';

import { SpaComponent } from './spa/spa.component';
import { ProductComponent } from './spa/product.component';
import { InventoryComponent } from './spa/inventory.component';
import { PageNotFoundComponent } from './spa/PageNotFound.component';
import { RouterModule, Routes } from '@angular/router';

import { CustH3ColorDirective } from './Directives/custh3color.directive';

const appRoutes: Routes = [
	{ path: 'Home', component: SpaComponent },
	{ path: 'Product', component: ProductComponent },
	{ path: 'Inventory', component: InventoryComponent },
	{ path: '**', component: PageNotFoundComponent },
];


@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent, EmployeeComponent, StudentComponent, StudentSalaryPipe,
  					SpaComponent, ProductComponent, InventoryComponent, PageNotFoundComponent,
  					CustH3ColorDirective ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
