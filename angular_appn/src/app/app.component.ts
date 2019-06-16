import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
	<h2>Routing</h2>
	<ul>
		<li><a [routerLink] = "['/Product']">Product</a></li>
		<li><a [routerLink] = "['/Inventory']">Inventory</a></li>
	</ul>
	<router-outlet></router-outlet>
	<br/><br/><hr/>

	<h1>Hello {{name}}</h1>
		<employee>Loding Employee...</employee>
		<student>Loding Student...</student>`,
})
export class AppComponent  { 
	name:string = 'Angular JS Developer'; 
}
