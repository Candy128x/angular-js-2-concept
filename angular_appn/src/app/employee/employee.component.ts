import { Component } from '@angular/core';

@Component ({
	selector: 'employee',
	templateUrl: 'app/employee/employee.component.html',
})
export class EmployeeComponent {
	firstName:string = 'Aman';
	lastName:string = 'Smith';
	age:number = 23;
	address:string = 'Mumbai';

	empName() : string {
		return this.firstName + ' ' + this.lastName;
	}
}