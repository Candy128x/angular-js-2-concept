import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'inhand'
})

export class StudentSalaryPipe implements PipeTransform {
	transform(value: string, tax: string){
		tax = tax > 1 ? tax : 10;
		return (value) - ((value) * tax / 100);
	}
}