import {Component} from '@angular/core';
import {FormGroup, FormControl, Validators, FormArray, FormBuilder} from "@angular/forms";
import {Observable} from "rxjs/Observable";

@Component({
	selector: 'data-driven',
	templateUrl: 'data-driven.component.html'
})
export class DataDrivenComponent {
	myForm: FormGroup;

	private emailRegex = "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?";

	genders = ['male', 'female'];

	constructor(private formBuilder: FormBuilder) {

		/*
		 this.myForm = new FormGroup({
		 userdata: new FormGroup({
		 username: new FormControl('bob', Validators.required),
		 email: new FormControl('', [Validators.required, Validators.pattern(this.emailRegex)]),
		 }),
		 password: new FormControl('', Validators.required),
		 gender: new FormControl('female'),
		 hobbies: new FormArray([
		 new FormControl('cooking')
		 ])
		 });
		 */

		// using FormBuilder to build a form
		this.myForm = formBuilder.group({
			userdata: formBuilder.group({
				username: ['bob', [Validators.required], this.asyncIsEven],
				email: ['', [
					Validators.required,
					Validators.pattern(this.emailRegex)
				]],
			}),
			password: ['', Validators.required],
			gender: ['female'],
			hobbies: formBuilder.array([
				['cooking']
			])
		});

		this.myForm.valueChanges.subscribe(
			(data: any) => console.log('value: ',data)
		)
		this.myForm.statusChanges.subscribe(
			(data: any) => console.log('status: ',data)
		)
	}

	onAddHobby() {
		(<FormArray>this.myForm.controls['hobbies']).push(new FormControl(''));
		console.log("this.myForm.controls", this.myForm.controls);

	}

	onSubmit() {
		console.log(this.myForm);
	}

	// example of validator returning a boolean
	// isEven(control: FormControl): boolean{

	isEven(control: FormControl): {[s: string]: string} {
		// a failed validation returns a boolean (as defined in line above)
		// a succesful validate returns nothing or null
		if (control.value % 2 == 0) {
			return null;
		} else {
			// return any boolean
			// return false;
			return {'msg': 'you are odd'}
		}
	};

	asyncIsEven(control: FormControl): Promise<any> | Observable<any> {
		const promise = new Promise<any>(
			(resolve, reject) => {
				setTimeout(() => {

					if (control.value % 2 == 0) {
						resolve(null);
					} else {
						// return any boolean
						// return false;
						resolve({'msg': 'you are odd'});
					}
				}, 1500);
			}
		);
		return promise;
	}

}
