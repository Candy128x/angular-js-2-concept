import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component ({
	selector: 'spa',
	templateUrl: 'app/spa/spa.component.html',
	// styleUrls: [ 'app/student/student.component.css' ],
	styles: ['h2{color: green;}']
})


export class SpaComponent {
	constructor(private _router:Router){}

	goToInventory() : void{
		this._router.navigate(['/Inventory']);
	}

	goToProduct() : void{
		this._router.navigate(['/Product']);
	}

	goToHome() : void{
		this._router.navigate(['/spa']);
	}
}