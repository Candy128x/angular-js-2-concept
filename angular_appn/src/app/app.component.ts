import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>
  				<employee>Loding Employee...</employee>`,
})
export class AppComponent  { 
	name:string = 'Angular JS Developer'; 
}
