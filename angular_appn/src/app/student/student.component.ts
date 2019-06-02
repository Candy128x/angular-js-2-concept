import { Component } from '@angular/core';

@Component ({
	selector: 'student',
	templateUrl: 'app/student/student.component.html',
	styleUrls: [ 'app/student/student.component.css' ],
	// styles: ['h2{color: green;}']
})
export class StudentComponent {
	firstName:string = 'Dev';
	lastName:string = 'Kumar';
	age:number = 19;
	address:string = 'Banglore';

	studName() : string {
		return this.firstName + ' ' + this.lastName;
	}
}