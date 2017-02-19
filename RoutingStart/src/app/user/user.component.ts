import { Component, OnDestroy } from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-user-component',
  template: `
      <h1>User Component</h1>
      <button (click)="goHome()">go home</button>
      <span>id: {{id}}</span>
      <hr>
      <router-outlet></router-outlet>
    `
})
export class UserComponent implements OnDestroy {

	// performs garbage collection on observables
	private subscription: Subscription;


	id: string;

  constructor(private router: Router, private activatedRoute: ActivatedRoute){

  	// this.id = activatedRoute.snapshot.params['id'];
  	this.subscription = activatedRoute.params.subscribe(
			(p: any) => this.id = p['id']
		)
	}

  goHome(){
		this.router.navigate([''], { queryParams: { 'analytics' : 100 }});
  }

  ngOnDestroy(){
  	this.subscription.unsubscribe();
	}
}
