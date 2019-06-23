import { Component } from '@angular/core';
import { StudentService } from './student.service';


@Component ({
	selector: 'student',
	templateUrl: 'app/student/student.component.html',
	styleUrls: [ 'app/student/student.component.css' ],
	// styles: ['h2{color: green;}'],
	providers: [ StudentService ]
})


export class StudentComponent {

	studentCars: any[] = null;
	constructor(private studcService: StudentService) {
		this.studentCars = this.studcService.getStudent();
	}

	firstName:string = 'Dev';
	lastName:string = 'Kumar';
	age:number = 19;
	address:string = 'Banglore';
	balance:number = 2000;
	appleImgPath:string = 'https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg';
	colspan:number = 2;
	cssclstouse:string = "bg-gray";
	usefontcomic:boolean = true;
	tdagecolor:string= "yellow";
	tdagebgclr:string= "green";
	btnTxt:string = "Show Details";
	showDetails:boolean = false;
	val:string = 'Ashish';

	studName() : string {
		return this.firstName + ' ' + this.lastName;
	}

	btnClickMe() : void {
		alert('Hey You Clicked on `Click Me` Button.');
	}

	displayDetails() : void {
		this.showDetails = !this.showDetails;
		this.btnTxt = this.showDetails == true ? "Hide Details" : "Show Details";
	}

	studentRecords: any[] = [
		{id: 101, name:'Shiv', dob: '01/01/1996', eMailId: 'shiv@gm.com', salary: 20000, city: 'Mumbai'},
		{id: 102, name:'Ganesh', dob: '11/01/1996', eMailId: 'ganesh@gm.com', salary: 29533, city: 'Kolkata'},
		{id: 103, name:'Pawan', dob: '16/01/1997', eMailId: 'pawan@gm.com', salary: 31000, city: 'Banglore'},
		{id: 104, name:'Chatur', dob: '24/04/1993', eMailId: 'chatur@gm.com', salary: 18000, city: 'Ahmedabad'},
		{id: 105, name:'Narayan', dob: '12/10/1996', eMailId: 'narayan@gm.com', salary: 39800, city: 'Mumbai'}
	];
}