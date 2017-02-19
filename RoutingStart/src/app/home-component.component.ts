import {Component, OnDestroy} from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-home-component',
  template: `
    <h1>
      Home Component!
    </h1>
    <hr/>
    <span>analytics: {{param}}</span>
    <!--<span>banality: {{param}}</span>-->
  `,
  styles: []
})
export class HomeComponent implements OnDestroy {
  private subscription: Subscription;

  param: string;
  // param2: string;

  constructor(private route: ActivatedRoute) {
    this.subscription = route.queryParams.subscribe(
      (queryParam: any) => this.param = queryParam['analytics']
      // (queryParam: any) => this.param2 = queryParam['banality']
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
