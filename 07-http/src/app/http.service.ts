import {Injectable} from '@angular/core';
import {Http} from "@angular/http";

@Injectable()
export class HttpService {

  constructor(private http: Http) { }

  getData(){
    return this.http.get('https://ang2-learning.firebaseio.com/msg.json')
  }

}
