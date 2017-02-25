import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";

@Component({
    selector: 'data-driven',
    templateUrl: 'data-driven.component.html'
})
export class DataDrivenComponent {
    myForm: FormGroup;

	private emailRegex = "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?";

	genders = [ 'male', 'female' ];

	constructor(){
        this.myForm = new FormGroup({
        	userdata: new FormGroup({
				username: new FormControl('bob', Validators.required),
				email: new FormControl('', [Validators.required, Validators.pattern(this.emailRegex)]),
			}),
            password: new FormControl('', Validators.required),
			gender: new FormControl('female')
        });
    }

    onSubmit() {
    	console.log(this.myForm);
	}

}
