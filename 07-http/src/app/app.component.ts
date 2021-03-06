import {Component, OnInit} from '@angular/core';
import {HttpService} from "./http.service";
import {Response} from "@angular/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [HttpService]
})
export class AppComponent implements OnInit {
  constructor(private httpService: HttpService){}

  ngOnInit(){
    this.httpService.getData()
      .subscribe(
        (data: Response) => console.log("data",data)
      );
  }
}
