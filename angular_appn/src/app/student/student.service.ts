import { Injectable } from  '@angular/core';

@Injectable()
export class StudentService{

	getStudent(): any[]{
		return [
			{id:111, name:'Ashish', car:'Audi'},
			{id:112, name:'Bhavya', car:'BMW'},
			{id:113, name:'Chukiya', car:'Chervolet'},
			{id:114, name:'Dev', car:'Ducati'},
			{id:115, name:'Elon', car:'EEdog'}
		];
	}
}