import {Component} from '@angular/core';

@Component({
	selector: 'pm-app',
	template:`
		<div> 
			<h1>{{pageTitle}}</h1>
			<div>First Component</div>
			<pm-products></pm-products>
			
		</div>
	`

})

export class AppComponent{
	pageTitle: string = 'This is product management'
}