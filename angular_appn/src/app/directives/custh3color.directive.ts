import { Directive, ElementRef } from '@angular/core';

@Directive({
	selector: '[cust-h3-color]'
})

export class CustH3ColorDirective {
	constructor(ref: ElementRef) {
		ref.nativeElement.style.color = 'indigo';
	}
}