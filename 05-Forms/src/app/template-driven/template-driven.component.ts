import {Component} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
	selector: 'template-driven',
	templateUrl: 'template-driven.component.html',
	styles: [`
		input.ng-invalid { border: solid 1px #f88; }
	`]
})
export class TemplateDrivenComponent {
	onSubmit(form:NgForm) {
		console.log(form);
	}
}
