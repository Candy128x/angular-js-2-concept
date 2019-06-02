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
	balance:number = 2000;
	appleImgPath:string = 'https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg';
	colspan:number = 2;

	studName() : string {
		return this.firstName + ' ' + this.lastName;
	}
}